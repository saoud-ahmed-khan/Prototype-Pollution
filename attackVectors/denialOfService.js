const express = require('express');
const router = express.Router();

/**
 * Example Payload:
 * {
 *   "id": 1,
 *   "name": "Alice",
 *   "__proto__": {
 *     "toString": function () {
 *       return this.toString();
 *     }
 *   }
 * }
 */

// Route to demonstrate Denial of Service (DoS)
router.post('/', (req, res) => {
  const userData = req.body; // Attacker-controlled input
  
  try {
    // Trigger the toString() recursion
    const result = userData.toString();
    res.send(result); // Will not execute if recursion is triggered
  } catch (error) {
    console.error('Server error due to prototype pollution:', error.message);
    res.status(500).send('Server crashed due to Prototype Pollution');
  }
});

module.exports = router;
