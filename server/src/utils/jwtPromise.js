
const jwt = require('jsonwebtoken');
const util = require('util');

const jwtSign = util.promisify(jwt.sign);
const jwtVarify = util.promisify(jwt.verify);

const utilService = {
    jwtSign,
    jwtVarify
}

module.exports = utilService;