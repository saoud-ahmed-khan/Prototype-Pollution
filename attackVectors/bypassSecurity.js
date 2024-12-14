/* Request body for Bypassing Security Controls
{
    "id": 1,
    "name": "Alice",
    "__proto__": {
      "isAdmin": true  // Polluting the security-related field
    }
  }
The attacker manipulates a security check (e.g., `isAdmin` field
  */
const express = require('express');
const router = express.Router();

// Bypass Security Controls: Polluting security-related fields
router.post('/', (req, res) => {
  let userData = req.body;  // Attacker-controlled data
  
  // Simulated role check
  if (userData.isAdmin) {
    res.json({ message: 'Security bypassed, user is admin' });
  } else {
    res.status(403).json({ message: 'Access denied' });
  }
});

module.exports = router;
