
const express = require('express');
const app = express();
const cors = require('cors');

const dataBase = require('./config/dataBase');
require('dotenv').config();
const PORT = process.env.PORT || 5000;

const { verifyToken } = require('./middlewares/authMiddleware');
const router = require('./routes');

app.use(cors());
app.use(express.json());
app.use(verifyToken);
app.use(router);

dataBase()
    .then(() => {
        app.listen(PORT, () => console.log('app is running on http://localhost:5000'));
    })
    .catch(err => {
        console.log('Cannot connect to the server.');
    });