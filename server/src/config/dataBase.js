
const mongoose = require('mongoose');

function dataBase (connectionStr) {

    return mongoose.connect(connectionStr);
}

module.exports = dataBase