
const express = require('express');
const router = express.Router();

const userControler = require('./controlers/userController');
const photoControler = require('./controlers/photoCardsController');

router.use('/users', userControler);
router.use('/data/photos', photoControler);

module.exports = router;