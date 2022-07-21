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
router.get('/gallery', withAuth, async (req, res) => {
  try {
    const picData = await PetPicture.findAll();
    const pics = picData.map((pic) => pic.get({ plain: true }));

    res.render('gallery', {
      pics,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.redirect('login');
  }
});

// to add pics
router.post('/gallery/new', withAuth, async (req, res) => {
  const body = req.body;
  try {
    const newPic = await PetPicture.create({
      ...body,
    });
    return res.status(200).json(newPic);
  } catch (err) {
    res.status(400).json(err);
  }
});

// to create a new pet
router.get('/new', withAuth, (req, res) => {
  res.render('createPet', { logged_in: req.session.logged_in });
});

// to edit an existing pet
router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const PetData = await Pet.findByPk(req.params.id);

    if (PetData) {
      const pet = PetData.get({ plain: true });
      res.render('singlePet', {
        pet,
        logged_in: req.session.logged_in,
      });
    } else {
      alert('Failed to edit pet');
    }
  } catch (err) {
    res.redirect('login');
  }
});

module.exports = router;
