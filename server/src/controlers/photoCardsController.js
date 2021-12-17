
const express = require('express');
const router = express.Router();

const photoService = require('../servecies/photoCard');
const { isAuth } = require('../middlewares/authMiddleware');

router.get('/', async (req, res) => {
    try {
        let photoCards = await photoService.getAll();
        res.json(photoCards);

    } catch (error) {
        res.status(400).json({ message: 'Cannot connect to server' });
    }

});

router.post('/', isAuth, async (req, res) => {
    let name = req.body.name;
    let genre = req.body.genre;
    let imageUrl = req.body.imageUrl;

    try {
        await photoService.create({ name, genre, imageUrl, _ownerId: req.user._id });
        res.status(200).json({ message: 'Succesfully created' });

    } catch (err) {
        res.status(401).json({ message: 'Yor are not authorized' });
    }
});

router.delete('/:id', (req, res) => {
    try {
        photoService.deletePhoto(req.params.id)
            .then(() => {
                res.status(200).json({ message: 'Succesfully removed photo' });
            })

    } catch (error) {
        res.status(400).json({ message: 'Error' });
    }
})


module.exports = router;