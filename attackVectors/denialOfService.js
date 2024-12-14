const express = require('express');
const router = express.Router();

/*Request body for Denial of Service (DoS)
{
    "id": 1,
    "name": "Alice",
    "__proto__": {
      "toString": "function() { return this.toString(); }"  // Infinite recursion
    }
  }
    The attacker exploits the `toString` method to cause infinite recursion.
    This will eventually crash the server due to stack overflow.
  */
  

// Denial of Service (DoS): Application crashes due to infinite loop
router.post('/', (req, res) => {
  let userData = req.body;  // Attacker-controlled data
  
  // Prototype pollution: Modify toString method to cause infinite recursion
  userData.__proto__.toString = function() {
    return this.toString(); // Infinite loop
  };
  
  try {
    userData.toString();  // This will cause the app to crash
    res.send('This will never be sent');
  } catch (error) {
    res.status(500).send('App Crashed due to Prototype Pollution');
  }
});

module.exports = router;
