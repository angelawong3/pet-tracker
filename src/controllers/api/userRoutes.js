const router = require('express').Router();
const { User } = require('../../models');

// "/api/user" endpoint

// POST request to sign up
router.post('/', async (req, res) => {
  try {
    const newUserData = await User.create({
      owner_name: req.body.owner_name,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.owner_id = newUserData.id;
      req.session.owner_name = newUserData.owner_name;
      req.session.email = newUserData.email;
      req.session.loggedIn = true;

      res.json(newUserData);
    });
  } catch (err) {
    res.status(400).json({ message: 'Cannot sign up, please try again!' });
  }
});

// POST request to login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { owner_name: req.body.owner_name },
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect name or password, please try again' });
      return;
    }

    const validPassword = userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    req.session.save(() => {
      //   req.session.user_id = userData.id;
      req.session.owner_name = userData.owner_name;
      req.session.logged_in = true;

      res.json({ userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// POST request to logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
