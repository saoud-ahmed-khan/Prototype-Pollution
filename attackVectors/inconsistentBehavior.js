const express = require('express');
const router = express.Router();

/*
  Inconsistent Behavior: The attacker manipulates the `toString` method to generate 
  unpredictable behavior, leading to inconsistent application output.
*/

// Route for Inconsistent Behavior attack
router.post('/', (req, res) => {
  let userData = req.body; // Attacker-controlled data

  // Simulated behavior of using toString
  try {
    const output = userData.toString(); // Unpredictable output due to prototype pollution
    res.send(`Output: ${output}`);
  } catch (error) {
    res.status(500).send(`Error: ${error.message}`);
  }
});

module.exports = router;
