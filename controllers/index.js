const router = require('express').Router();

//const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');
const userRoute = require('./userRoutes.js');
const apiRoutes = require('./api/index')

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/user', userRoute);


module.exports = router;