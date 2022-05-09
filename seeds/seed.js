const sequelize = require('../config/connection');
const { User, Topic } = require('../models');

const userData = require('./userData.json');
const topicData = require('./topicData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const topic of topicData) {
    await Topic.create({
      ...topic,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
