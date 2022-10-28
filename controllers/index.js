const router = require('express').Router();

//const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');
const apiRoutes = require('./api/index')

router.use('/api', apiRoutes);
router.use('/', homeRoutes);


module.exports = router;