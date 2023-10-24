const router = require('express').Router();
const { clockOut } = require('../../controllers/clockOut');

router.route('/').post(clockOut);

module.exports = router;