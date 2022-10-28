const router = require('express').Router();
//const userRoutes = require('./userRoutes');
const fitnessRoutes = require ('./fitnessRoutes')
//router.use('/users', userRoutes);
router.use('/fitness', fitnessRoutes)

module.exports = router;