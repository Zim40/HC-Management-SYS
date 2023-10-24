const router = require('express').Router();
const clockInRoutes = require('./clockInRoutes');
const clockOutRoutes = require('./clockOutRoutes');

// Imported both clockIn + clockOut routes and assigned Url endpoints
router.use('/clockIn', clockInRoutes);
router.use('/clockOut',  clockOutRoutes);

module.exports = router