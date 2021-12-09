
const express = require('express');
const router = express.Router();

const userControler = require('./controlers/userController');

router.use('/users', userControler);

module.exports = router