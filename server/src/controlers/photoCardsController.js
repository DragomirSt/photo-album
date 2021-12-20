
const express = require('express');
const router = express.Router();

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${file.originalname}`);
    }
});
const upload = multer({ storage });

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

router.post('/', isAuth, upload.single('imageUrl'), async (req, res) => {
   
    let name = req.body.name;
    let genre = req.body.genre;
    let imageUrl = req.file.path;

    if (req.file.mimetype !== 'image/jpeg' && 'image/png') {
        res.status(400).json({ message: 'Invalid type, images must be jpeg or png' });
        return;
    }

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