const router = require('express').Router();
const { Comments } = require('../../models');

router.post('/', withAuth, async (req, res) => {
    try {
      console.log(req.body)
      const newComment = await Comments.create({
        ...req.body,
        user_id: req.session.user_id,
      });
      res.status(200).json(newComment);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;