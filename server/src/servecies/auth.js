
const bcrypt = require('bcrypt');
const User = require('../models/User');

const utilService = require('../utils/jwtPromise');
const constantStrings = require('../utils/constants');


exports.register = async (email, password) => {

    return User.create({ email, password });
};

exports.login = async (email, password) => {
    try {
        let user = await User.findOne({ email });
        let match = await bcrypt.compare(password, user.password);

        if (match) {
            let accessToken = await createToken(user);
            return { user, accessToken };
        }

    } catch (error) {
        throw new Error('Incorect username or password');
    }

};

const createToken = async (user) => {
    let payload = {
        _id: user._id,
        email: user.email,
    }
    try {
        let token = await utilService.jwtSign(payload, constantStrings.SECRET)
        return token;

    } catch (error) {
        throw new Error('Could not generate token');
    }

};