const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage });

const imageController = require('../controllers/image.controller');

router.get('/:id', imageController.getImage);
router.get('/', imageController.getImages);
router.post('/upload', upload.single('image'), imageController.uploadImage);
router.delete('/:id', imageController.deleteImage);

module.exports = router;