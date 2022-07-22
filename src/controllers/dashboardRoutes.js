const router = require('express').Router();
const { Pet, User, PetPicture } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// dashboard route
router.get('/', withAuth, async (req, res) => {
  try {
    const petData = await Pet.findAll({
      where: { user_id: req.session.user_id },
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

// gallery route
router.get('/gallery', (req, res) => {
  res.render('gallery');
});

// to create a new pet
router.get('/new', (req, res) => {
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
