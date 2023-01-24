//This code creates a new Express Router and imports two route modules, one for handling home routes and the other for handling api routes, then it uses them with paths '/' and '/api' respectively. Finally, it exports the router as a module.const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);


module.exports = router;
