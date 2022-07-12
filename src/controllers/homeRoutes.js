const router = require('express').Router();
const { Pet, User } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// get all posts
router.get('/', async (req, res) => {});

// get one post by its id, withAuth later
router.get('/post/:id', async (req, res) => {});

// lognin route
router.get('/login', (req, res) => {});

// signup route
router.get('/signup', (req, res) => {});

module.exports = router;
