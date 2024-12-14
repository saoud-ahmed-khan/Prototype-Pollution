const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Importing routes for each attack vector
const privilegeEscalationRoute = require('./attackVectors/privilegeEscalation');
const denialOfServiceRoute = require('./attackVectors/denialOfService');
const dataCorruptionRoute = require('./attackVectors/dataCorruption');
const remoteCodeExecutionRoute = require('./attackVectors/remoteCodeExecution');
const inconsistentBehaviorRoute = require('./attackVectors/inconsistentBehavior');
const bypassSecurityRoute = require('./attackVectors/bypassSecurity');
const thirdPartyVulnerabilitiesRoute = require('./attackVectors/thirdPartyVulnerabilities');

// Setting up routes for each attack type
app.use('/privilegeEscalation', privilegeEscalationRoute);
app.use('/denialOfService', denialOfServiceRoute);
app.use('/dataCorruption', dataCorruptionRoute);
app.use('/remoteCodeExecution', remoteCodeExecutionRoute);
app.use('/inconsistentBehavior', inconsistentBehaviorRoute);
app.use('/bypassSecurity', bypassSecurityRoute);
app.use('/thirdPartyVulnerabilities', thirdPartyVulnerabilitiesRoute);

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
