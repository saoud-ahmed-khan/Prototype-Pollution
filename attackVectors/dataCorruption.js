const express = require('express');
const router = express.Router();

// Simulated user database (In-memory)
let users = [
  { id: 1, name: 'Alice', role: 'user' },
  { id: 2, name: 'Bob', role: 'user' },
];

/* Request body for Data Corruption
{
    "id": 1,
    "name": "Alice",
    "age": "invalid",  // Corrupting the age field
    "__proto__": {
      "age": "invalid"  // Polluting the 'age' field with an invalid value
    }
  }
    The attacker sends corrupted data for the `age` field, which breaks data integrity
    and causes issues in database operations or API responses.
  */

// Data Corruption: Polluting input causing unexpected database modification
router.post('/', (req, res) => {
  let userData = req.body;  // Attacker-controlled data
  
  // Simulated database update
  let user = users.find((u) => u.id === userData.id);
  if (user) {
    user.age = userData.age; // Setting corrupted value
    res.json({ message: 'User data updated', user });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

module.exports = router;
