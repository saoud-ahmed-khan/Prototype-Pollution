const express = require('express');
const router = express.Router();
/* Request body for Remote Code Execution (RCE)
{
    "id": 1,
    "name": "Alice",
    "__proto__": {
      "maliciousCode": "function() { console.log('Executing arbitrary code...'); }"
    }
  }
  
    The attacker exploits the polluted `maliciousCode` function to execute arbitrary
    code, potentially causing harm to the system or gaining control over the application.
  */


// Remote Code Execution (RCE): Attacker can execute arbitrary code
router.post('/', (req, res) => {
    let userData = req.body;  // Attacker-controlled data

    // Trigger the malicious function
    userData.maliciousCode();
    res.send('Code executed');
});

module.exports = router;
