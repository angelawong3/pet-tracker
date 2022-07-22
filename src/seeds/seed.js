const sequelize = require('../config/connection');
const { User, Pet, PetPicture } = require('../models');

const userData = require('./userData.json');
const petData = require('./petData.json');
const picData = require('./petPicture.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const pet of petData) {
    await Pet.create({
      ...pet,
    });
  }

  for (const pic of picData) {
    await PetPicture.create({
      ...pic,
    });
  }

  process.exit(0);
};

seedDatabase();
