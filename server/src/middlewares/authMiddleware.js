
const jwt = require('jsonwebtoken');
const secretString = require('../utils/constants');

exports.verifyToken = (req, res, next) => {
    let token = req.headers['x-authorization'];

    if (token) {
        jwt.verify(token, secretString.SECRET, function (err, decodedToken) {
            if (err) {
                res.status(403).json({ message: 'You are not authorized.' });
                return;
            }
            req.user = decodedToken;
            next();
        });
    } else {
        next();
    }
};

exports.isAuth = function (req, res, next) {
    if (req.user) {
        next();
    } else {
        res.status(403).json({ message: 'You are not authorized' });
    }
};
