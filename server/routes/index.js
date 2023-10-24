const router = require('express').Router();
const apiRoutes = require('./api');

// Consolidated Routes that interact with database into '/api' routes
// EXAMPLE:
// http://localhost:5000/api/clockIn
// http://localhost:5000/api/clockOut
router.use('/api', apiRoutes);

router.use((req, res) => res.send('Wrong Route!'));

module.exports = router;

