const express = require('express');
const router = express.Router();

// Simulated user database (In-memory)
let users = [
    { id: 1, name: 'Alice', role: 'user' },
    { id: 2, name: 'Bob', role: 'user' },
];

/*
Request body for Privilege Escalation
{
    "id": 1,
    "name": "Alice",
    "role": "user",
    "__proto__": {
      "role": "admin"  // Maliciously setting the role to 'admin'
    }
  }
  
    The attacker sends a request to escalate the user’s role by manipulating
    the `role` property via the `__proto__` object. This results in an unauthorized
    privilege escalation.
  */


// Privilege Escalation: Attacker bypassing role check
router.post('/', (req, res) => {
    let userData = req.body;  // Attacker-controlled data

    // Check if user has admin role
    let user = users.find((u) => u.id === userData.id);
    if (user) {
        user.role = userData.role; // Role is modified to 'admin' due to prototype pollution
        res.json({ message: 'User role escalated', user });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

module.exports = router;
