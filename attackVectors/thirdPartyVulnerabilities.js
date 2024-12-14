const express = require('express');
const router = express.Router();

/* Request body for Third Party Vulnerabilities
{
    "id": 1,
    "name": "Alice",
    "__proto__": {
      "exploit": "function() { Exploit third-party vulnerability }"
    }
}
    The attacker can exploit a vulnerability within a third-party package or service,
    leading to a security breach or system compromise.
  */


// Third Party Vulnerabilities: Exploiting vulnerable third-party libraries
router.post('/', (req, res) => {
    let userData = req.body;  // Attacker-controlled data

    // Exploit a vulnerability in a third-party package
    const vulnerablePackage = require('vulnerable-package');
    vulnerablePackage.exploit(userData);

    res.send('Exploited third-party vulnerability');
});

module.exports = router;
