const router = require('express').Router();
const { Pet, User } = require('../models');
// Import the custom middleware
// const withAuth = require('../middlewares/auth');

// get homepage
router.get('/', async (req, res) => {
  res.render('homepage');
  // swap for res.render when handlebars is configured
});

// dashboard route
router.get('/', async (req, res) => {
  res.render('dashboard', {
    logged_in: req.session.logged_in,
  });
});

// login route
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

// signup route
router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('signup');
});

module.exports = router;
