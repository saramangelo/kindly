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

  for (const opportunity of opportunityData) {
    await Opportunity.create({
      ...opportunity,
      date_of_opp: date_of_opp.toISOString(),
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
console.log(date_of_opp)
  process.exit(0);
};

seedDatabase();
