const User = require('./User');
const Topic = require('./Topic');
const Comment = require('./Comment');

User.hasMany(Topic, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Topic.belongsTo(User, {
  // foreignKey: 'user_id'
});

Comment.belongsTo(Topic, {
  foreignKey: 'topic_id'

});

Topic.hasMany(Comment, {
  // foreignKey: 'topic_id',
  onDelete: 'CASCADE'
});


Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Comment, {
  // foreignKey: 'topic_id',

});



// Comment.belongsTo(User, {
//   foreignKey: 'user_id'
// });

module.exports = { User, Topic, Comment };
