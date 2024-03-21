const express = require('express');
const router = express.Router();
const imageController = require('../controllers/image.controller');

router.post('/generate', imageController.generateImage);

module.exports = router;