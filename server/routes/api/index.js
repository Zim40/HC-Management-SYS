const router = require('express').Router();
const clockInRoutes = require('./clockInRoutes');
const clockOutRoutes = require('./clockOutRoutes');
const userRoutes = require('./userRoutes');

// Imported both clockIn + clockOut routes and assigned Url endpoints
router.use('/clockIn', clockInRoutes);
router.use('/clockOut',  clockOutRoutes);
router.use('/User', userRoutes)

module.exports = router