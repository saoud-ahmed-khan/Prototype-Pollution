/* Request body for Inconsistent Behavior
{
    "id": 1,
    "name": "Alice",
    "__proto__": {
      "toString": "function() { return 'This is a polluted object'; }"
    }
  }
  
  
    The attacker manipulates the `toString` method to generate unpredictable behavior,
    leading to inconsistent application output.
  */

const express = require('express');
const router = express.Router();

// Inconsistent Behavior: Polluting prototype leading to unpredictable application behavior
router.post('/', (req, res) => {
    let userData = req.body;  // Attacker-controlled data

    res.send(userData.toString()); // Unpredictable output
});

module.exports = router;
