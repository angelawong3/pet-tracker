const User = require('./User');
const Pet = require('./Pet');

User.hasMany(Pet, {
  foreignKey: 'userId',
});

Pet.belongsTo(User, {
  foreignKey: 'userId',
});

module.exports = { User, Pet };
