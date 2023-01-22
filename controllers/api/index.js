const router = require('express').Router();
const userRoutes = require('./userRoutes');
const opportunityRoutes = require('./opportunityRoutes');

router.use('/users', userRoutes);
router.use('/opportunities', opportunityRoutes);

module.exports = router;
