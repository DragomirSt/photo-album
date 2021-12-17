
const moongose = require('mongoose');

const PhotoCardSchema = new moongose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    _ownerId: {
        type: moongose.Types.ObjectId,
        ref: 'User'
    }

});

const PhotoCard = moongose.model('PhotoCard', PhotoCardSchema);

module.exports = PhotoCard;