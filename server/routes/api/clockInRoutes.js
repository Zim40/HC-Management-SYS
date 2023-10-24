const router = require('express').Router();
const { clockIn } = require('../../controllers/clockIn');

// Imported clockIn controller function and created standard route '/'.
router.route('/').post(clockIn);





module.exports = router;