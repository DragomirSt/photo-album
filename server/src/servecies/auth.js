
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

const constantStrings = require('../utils/constants');


exports.register = async (email, password) => {
    try {
        return User.create({ email, password });

    } catch (error) {
        throw error;
    }

};

exports.login = (email, password) => {

    return User.findOne({ email })
        .then(user => {
            return Promise.all([bcrypt.compare(password, user.password), user])
        })
        .then(([isValid, user]) => {
            if (isValid) {
                let accessToken = createToken(user);
                return { user, accessToken }
            }
        })
        .catch((err) => {
            throw err;
        });

};

const createToken = (user) => {
    let payload = {
        _id: user._id,
        email: user.email,
    }
    try {
        let token = jwt.sign(payload, constantStrings.SECRET,
            { expiresIn: '1h' });
            
        return token;

    } catch (error) {
        throw new Error('Could not generate token');
    }

};