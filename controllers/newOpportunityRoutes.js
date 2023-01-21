const router = require('express').Router();
const Opportunity = require('../models/Opportunity');

router.get('/', async (req, res) => {
    const opportunityData = await Opportunity.findAll().catch((err) => {
        res.json(err);
    });
    const opportunities = opportunityData.map((opportunity) => opportunity.get({ plain: true }));
    res.render('new-opportunity', { opportunities })
})
