
const PhotoCard = require('../models/PhotoCard');

exports.create = (data) => {
    return PhotoCard.create({ ...data });
};

exports.getAll = () => {
    return PhotoCard.find();
};

exports.deletePhoto = (id) => {
    return PhotoCard.findByIdAndDelete(id);
};

exports.getOne = (id) => {
    return PhotoCard.findById(id);
};

exports.update = (id, data) => {
    return PhotoCard.findByIdAndUpdate(id, data);
}