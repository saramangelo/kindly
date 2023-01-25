const router = require('express').Router();
const userRoutes = require('./userRoutes');
const opportunityRoutes = require('./opportunityRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/opportunities', opportunityRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
