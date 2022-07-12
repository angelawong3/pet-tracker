const router = require('express').Router();

const userRoutes = require('./userRoutes');
const petRoutes = require('./petRoutes');

router.use('/user', userRoutes);
router.use('/pet', petRoutes);

module.exports = router;
