const User = require('./User');
const Pet = require('./Pet');
const PetPicture = require('./PetPicture');

User.hasMany(Pet, {
  foreignKey: 'owner_id',
  onDelete: 'CASCADE',
});

Pet.belongsTo(User, {
  foreignKey: 'owner_id',
});

module.exports = { User, Pet, PetPicture };
