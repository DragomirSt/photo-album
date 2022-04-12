
const moongose = require('mongoose');

const PhotoCardSchema = new moongose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 4
    
    },
    imageUrl: {
        type: String,
        required: true,
        minlength: 4   
    },
    genre: {
        type: String,
        required: true,
        minlength: 3
    },
    _ownerId: {
        type: moongose.Types.ObjectId,
        ref: 'User'
    },
    likes: {
        type: Number,
    },
    comments: [
        
    ]
});

const PhotoCard = moongose.model('PhotoCard', PhotoCardSchema);

module.exports = PhotoCard;