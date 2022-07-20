const User = require('./User');
const Pet = require('./Pet');
const PetPicture = require('./PetPicture');

User.hasMany(Pet, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Pet.belongsTo(User, {
  foreignKey: 'user_id',
});

Pet.hasMany(PetPicture, {
  foreignKey: 'pet_id',
  onDelete: 'CASCADE',
});

PetPicture.belongsTo(Pet, {
  foreignKey: 'pet_id',
});

module.exports = { User, Pet, PetPicture };
