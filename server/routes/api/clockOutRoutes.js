const router = require('express').Router();
const { clockOut } = require('../../controllers/clockOut');

// Imported clockOut controller function and created standard route '/'
router.route('/').post(clockOut);

module.exports = router;