const router = require('express').Router();
const { Topic, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all topics and JOIN with user data
    const topicData = await Topic.findAll({
      // include: [
      //   {
      //     model: [User],
      //     attributes: ['name'],
      //   },
      // ],
      include: [User]
    });

    // Serialize data so the template can read it
    const topics = topicData.map((topic) => topic.get({ plain: true }));
    console.log("Topics Object: "+ JSON.stringify(topics));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      topics: topics, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    console.log("Here's your problem get /!"+ err);
    res.status(500).json(err);
  }
});

router.get('/topic/:id', async (req, res) => {
  try {
    const topicData = await Topic.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const topic = topicData.get({ plain: true });

    res.render('topic', {
      ...topic,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log("Here's your problem get a topic ID!")
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Topic }],
    });

    const user = userData.get({ plain: true });

    res.render('dashboard', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    console.log("Here's your problem get a dashboard!")
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

module.exports = router;
