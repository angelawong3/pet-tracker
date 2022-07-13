const router = require('express').Router();
const { User } = require('../../models');

// "/api/user" endpoint

// POST request to sign up
router.post('/', async (req, res) => {});

// POST request to login
router.post('/login', async (req, res) => {});

// POST request to logout
router.post('/logout', (req, res) => {});

module.exports = router;
