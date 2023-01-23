// This code imports the Express.js router, the Opportunity model from the models directory, and an authentication middleware from the utils directory. 

//It creates a new Express Router, import the opportunity model from the models directory and import the withAuth middleware from the utils directory to use it for the protected routes . 

//This also corresponds with profile.js on FE


const router = require('express').Router();
const userRoutes = require('./userRoutes');
const opportunityRoutes = require('./opportunityRoutes');

router.use('/users', userRoutes);
router.use('/opportunities', opportunityRoutes);

module.exports = router;
