const sequelize = require('../config/connection');
const { User, Opportunity } = require('../models');

const userData = require('./userData.json');
const opportunityData = require('./opportunityData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const project of opportunityData) {
    await Opportunity.create({
      ...opportunity,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
