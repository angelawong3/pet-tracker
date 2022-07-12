const router = require('express').Router();
const { Pet } = require('../../models');
const withAuth = require('../../utils/auth');

// "/api/pet" endpoint

// POST request to add a new pet, withAuth later
router.post('/', async (req, res) => {});

// PUT request to edit info of an existing pet
router.put('/:id', async (req, res) => {});

// DELETE request to del a pet
router.delete('/:id', async (req, res) => {});

module.exports = router;
