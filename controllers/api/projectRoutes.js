const router = require('express').Router();
const { Topic } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newTopic = await Topic.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newTopic);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const topicData = await Topic.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!topicData) {
      res.status(404).json({ message: 'No topic found by that id!' });
      return;
    }

    res.status(200).json(topicData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
