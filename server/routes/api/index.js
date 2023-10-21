const router = require('express').Router();
const clockInRoutes = require('./clockInRoutes');
// console.log("clockinRoute", clockInRoutes);

router.use('/clockIn', clockInRoutes);

module.exports = router