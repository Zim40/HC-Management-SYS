const router = require('express').Router();
const { clockIn } = require('../../controllers/clockIn');




router.route('/').post(clockIn);





module.exports = router;