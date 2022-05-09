const User = require('./User');
const Topic = require('./Topic');

User.hasMany(Topic, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Topic.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Topic };
