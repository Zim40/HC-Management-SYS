const router = require('express').Router();
const clockInRoutes = require('./clockInRoutes');
const clockOutRoutes = require('./clockOutRoutes');
console.log(clockOutRoutes);

router.use('/clockIn', clockInRoutes);
router.use('/clockOut',  clockOutRoutes);

module.exports = router