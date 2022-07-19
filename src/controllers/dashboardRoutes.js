const router = require('express').Router();
const { Pet, User } = require('../models');

// dashboard route
router.get('/', async (req, res) => {
  try {
    const petData = await Pet.findAll({
      where: { user_id: req.session.user_id },
      // tested by hard coding user id:
      // where: { user_id: 3 },
      include: [User],
    });
    const pets = petData.map((pet) => pet.get({ plain: true }));

    res.render('dashboard', {
      pets,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.redirect('login');
  }
});

// "/dashboard/new"
// to create new pet
router.get('/new', (req, res) => {
  // return res.send(req.session.user_id);
  res.render('createPet');
});

// to edit an existing pet
router.get('/edit/:id', async (req, res) => {
  try {
    const PetData = await Pet.findByPk(req.params.id);

    if (PetData) {
      const pet = PetData.get({ plain: true });
      res.render('singlePet', {
        pet,
      });
    } else {
      alert('Failed to edit pet');
    }
  } catch (err) {
    res.redirect('login');
  }
});

module.exports = router;
