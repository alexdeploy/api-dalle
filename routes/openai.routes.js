const express = require('express');
const router = express.Router();

const openaiController = require('../controllers/openai.controller');

router.post('/generate-image', openaiController.generateImage);

module.exports = router;