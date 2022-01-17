
const express = require('express');
const router = express.Router();

const photoService = require('../servecies/photoCard');
const { isAuth } = require('../middlewares/authMiddleware');

const PhotoCard = require('../models/PhotoCard');
const Comment = require('../models/Comments');

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

router.delete('/:id', async (req, res) => {
    try {
        photoService.deletePhoto(req.params.id)
            .then(() => {
                res.status(200).json({ message: 'Succesfully removed photo' });
            })

    } catch (error) {
        res.status(400).json({ message: 'Error' });
    }

});

router.get('/:id', async (req, res) => {
    try {
        let photoCard = await photoService.getOne(req.params.id);
        res.json(photoCard);

    } catch (error) {
        res.status(400).json({ message: 'Error' });
    }

});

router.put('/:id', async (req, res) => {
    try {
        await photoService.update(req.params.id, req.body);
        res.json({ message: 'Sucessfully updated' });

    } catch (error) {
        res.status(400).json({ message: 'Error' });
    }

});

router.patch('/likes', async (req, res) => {
    return PhotoCard.findByIdAndUpdate(req.body.postId, {
        $inc: { likes: +1 }
    }, {
        new: true
    }).exec((err, result) => {
        if (err) {
            return res.status(400).json({ message: 'Error' });
        } else {
            return res.json(result);
        }
    });

});

router.post('/comment', async (req, res) => {
    const comment = await Comment.create(req.body);

    return PhotoCard.findByIdAndUpdate(req.body.commentId, {
        $push: { comments: comment }
    }, {
        new: true
    }).exec((err, result) => {
        if (err) {
            return res.status(400).json({ message: 'Something went wrong' });
        } else {
            return res.status(200).json({ result, message: 'Successfully added new comment' });
        }
    });

});

module.exports = router;