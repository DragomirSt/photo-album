
const express = require('express');
const app = express();
const cors = require('cors');

const dataBase = require('./config/dataBase');
const env = process.env.NODE_ENV || 'development';
const config = require('./config/config.json')[env];
const router = require('./routes');
const { verifyToken } = require('./middlewares/authMiddleware')


app.use(cors());
app.use(express.json());
app.use(verifyToken);
app.use(router);

app.get('/api', (req, res) => {
    res.json({ message: 'Server is running' })
})

dataBase(config.DB_CONNECTION_STRING)
    .then(() => {
        app.listen(config.PORT, () => console.log('app is running on http://localhost:3030'))
    })