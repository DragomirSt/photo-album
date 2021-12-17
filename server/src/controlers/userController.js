
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const authService = require('../servecies/auth');

router.post('/register', async (req, res) => {
    let { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const user = await authService.register(email, hashedPassword);
        res.json({ message: 'Registration has been successfull!', userId: user._id });

    } catch (error) {
        throw new Error('Sorry');
    }

});

router.post('/login', (req, res) => {
    let { email, password } = req.body;

    if (email && password !== undefined) {

        authService.login(email, password)
            .then((userData) => {
                let user = userData.user
                let accessToken = userData.accessToken

                res.json({
                    _id: user._id,
                    email: user.email,
                    accessToken
                });
            })
            .catch(() => {
                res.status(400).json({message: 'Wrong username or password'});
            });
    }

});

router.get('/logout', (req, res) => {
    res.json({ ok: true });
});


module.exports = router;