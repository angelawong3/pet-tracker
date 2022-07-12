const router = require('express').Router();
const { Pet, User } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// get all posts
router.get('/', async (req, res) => {});

// get one post by its id, withAuth later
router.get('/post/:id', async (req, res) => {});

// lognin route
router.get('/login', (req, res) => {
    res.send("You've reached the login page")
// swap for res.render when handlebars is configured
});

// signup route
router.get('/signup', (req, res) => {
    res.send("you've reached the sign up page")
    // swap for res.render when handlebars is configured
});

module.exports = router;
