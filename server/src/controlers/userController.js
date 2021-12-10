
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const authService = require('../servecies/auth');

router.post('/register', async (req, res) => {
    let { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const user = await authService.register(email, hashedPassword);
        res.json({
            _id: user._id,
            email: user.email,

        });

    } catch (error) {
        res.status('403').json({ message: 'Something went wrong srry ...' });
    }

});

router.post('/login', async (req, res) => {
    let { email, password } = req.body;

    try {
        if (email && password !== undefined) {
            let { user, accessToken } = await authService.login(email, password);

            res.json({
                _id: user._id,
                email: user.email,
                accessToken

            });
        }
    } catch (error) {
        res.status('403').json({ message: 'Wrong username or password' });
    }

});

router.get('/logout', (req, res) => {
    res.json({ ok: true });
});


module.exports = router;