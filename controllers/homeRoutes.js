const router = require('express').Router();
const { Opportunity, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const opportunityData = await Opportunity.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const opportunities = opportunityData.map((opportunity) =>
      opportunity.get({ plain: true })
    );
    res.render('homepage', {
      opportunities,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
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

router.get('/profile', async (req, res) => {
  try {
    res.render('profile');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/opportunity', (req, res) => {
  try {
    res.render('opportunity');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  try {
    res.render('login');
  } catch (err) {
    res.status(500).json(err);
  }
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
