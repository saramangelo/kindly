const User = require('./User');
const Opportunity = require('./Opportunity');

User.hasMany(Opportunity, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Opportunity.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Opportunity };
