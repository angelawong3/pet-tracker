const router = require('express').Router();
const { Pet, User } = require('../models');
// Import the custom middleware
// const withAuth = require('../middlewares/auth');

// get all posts
router.get('/', async (req, res) => {
  res.render("homepage");
  // swap for res.render when handlebars is configured
});

// dashboard route
router.get('/', async (req, res) => {

  res.render("dashboard", {
    logged_in: req.session.logged_in 
  }); 
});


// login route
router.get('/login', (req, res) => {
  res.render("login");
  // swap for res.render when handlebars is configured
});

// signup route
router.get('/signup', (req, res) => {
  res.render("signup");
  // swap for res.render when handlebars is configured
});

module.exports = router;
