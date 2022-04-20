
const mongoose = require('mongoose');

const dataBase = () => {
    return mongoose.connect(process.env.MONGO_CONNECTION_STR);
}
module.exports = dataBase