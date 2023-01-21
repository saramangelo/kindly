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
  // let dateobj = new Date(date_of_opp)
    await Opportunity.create({
      ...opportunity,
      // date_of_opp: dateobj.toISOString(),
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
// console.log(date_of_opp)
  process.exit(0);
};

seedDatabase();
