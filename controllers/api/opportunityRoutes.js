//this code sets up routing for an Express.js application. 

//It imports two route modules, one for handling users and one for handling opportunities, and assigns them to routes '/users' and '/opportunities' respectively. 

//It then exports the router as a module.

const router = require('express').Router();
const { Opportunity } = require('../../models');
const withAuth = require('../../utils/auth');

// This code imports the Express.js router, the Opportunity model from the models directory, and an authentication middleware from the utils directory.

// It creates a new Express Router, import the opportunity model from the models directory and import the withAuth middleware from the utils directory to use it for the protected routes .

router.post('/', withAuth, async (req, res) => {
  try {
    console.log(req.body)
    const newOpportunity = await Opportunity.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newOpportunity);
  } catch (err) {
    res.status(400).json(err);
  }
});



// check that GET request is working, it is
// router.get('/', (req, res) => {
//   res.json("hello");
// })

router.get("/:id", withAuth, async (req, res) => {
  try {
    const opportunityData = await Opportunity.findOne({ where: { id: req.params.id } });
    const opportunity = opportunityData.get({ plain: true });

    res.status(200).json(opportunity);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/", withAuth, async (req, res) => {
  try {
    const newOpportunity = await Opportunity.update(req.body, { where: { id: req.body.id } });

    res.status(200).json(newOpportunity);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const opportunityData = await Opportunity.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!opportunityData) {
      res.status(404).json({ message: 'No opportunity found with this id!' });
      return;
    }

    res.status(200).json(opportunityData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
