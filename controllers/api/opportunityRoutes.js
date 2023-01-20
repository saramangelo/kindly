const router = require('express').Router();
const { Opportunity } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newOpportunity = await Opportunity.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newOpportunity);
  } catch (err) {
    res.status(400).json(err);
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
