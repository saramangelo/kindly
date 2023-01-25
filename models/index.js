const User = require('./User');
const Opportunity = require('./Opportunity');
const Comments = require('./Comments');

User.hasMany(Opportunity, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Comments, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Opportunity.belongsTo(User, {
  foreignKey: 'user_id'
});

Opportunity.hasMany(Comments,{
  foreignKey: 'opportunity_id'
});

Comments.belongsTo(User, {
  foreignKey: 'user_id'
})

module.exports = { User, Opportunity, Comments };
