
const mongoose = require('mongoose');
const connection_db = "mongodb+srv://DragomirStoyanov:0040drago@cluster0.pjikl.mongodb.net/PhotoAlbum?retryWrites=true&w=majority";

function dataBase () {
    return mongoose.connect(connection_db);
}
module.exports = dataBase