const router = require('express').Router();
const { Opportunity, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // get all opportunities and join with user data
    const opportunityData = await Opportunity.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // router.get('/opportunity', async (req, res) => {
    //   try {
    //     await Opportunity.findAll()
    
    //     res.render('profile', {opportunities});
    //   } catch (err) {
    //     res.status(500).json(err);
    //   }
    // }); 

    // serialize the data so the template can read it
    const opportunities = opportunityData.map((opportunity) =>
      opportunity.get({ plain: true })
    );
    // pass serialized data and session flag into template
    res.render('homepage', {
      opportunities,
      logged_in: req.session.logged_in,
    });
    console.log(req.body)
  } catch (err) {
    console.log(response)
    res.status(500).json(err);
  }
});



router.get('/opportunity/:id', async (req, res) => {
  try {
    const opportunityData = await Opportunity.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const opportunity = opportunityData.get({ plain: true });

    res.render('opportunity', {
      ...opportunity,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// corresponds with FE profile.js
router.get('/profile', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Opportunity }],
    });

    const user = userData.get({ plain: true });

    // renders profile.handlebars
    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get('/login', (req, res) => {
  // if the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;

/*

    // Get all projects and JOIN with user data
    const opportunityData = await Opportunity.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const opportunities = opportunityData.map((opportunity) => opportunity.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', {
      opportunities,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/opportunities/:id', async (req, res) => {
  try {
    const opportunityData = await Opportunity.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const opportunity = opportunityData.get({ plain: true });

    res.render('opportunity', {
      ...opportunity,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
*/

// Use withAuth middleware to prevent access to route

/*  // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Opportunity }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true,
    });
  
});
*/
