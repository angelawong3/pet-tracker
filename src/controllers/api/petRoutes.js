const router = require('express').Router();
const { Pet } = require('../../models');
// Import the custom middleware
const withAuth = require('../../utils/auth');

// "/api/pet" endpoint

// POST request to add a new pet, withAuth later
router.post('/', withAuth, async (req, res) => {
  const body = req.body;
  body.user_id = req.session.user_id;
  try {
    const newPet = await Pet.create({
      ...body,
    });
    return res.status(200).json(newPet);
  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT request to edit info of an existing pet
router.put('/:id', withAuth, async (req, res) => {
  try {
    console.log(req.params.id);
    console.log(req.body);
    const [editPet] = await Pet.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (editPet > 0) {
      res.status(200).json(editPet);
    } else {
      res.status(404).json({ message: 'Cannot edit, please try again!' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE request to del a pet
// tested, work on Postman
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const petData = await Pet.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!petData) {
      res.status(404).json({ message: 'No pet found with this id!' });
      return;
    }

    res.status(200).json(petData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
