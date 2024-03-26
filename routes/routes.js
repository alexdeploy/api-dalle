const express = require('express');
const router = express.Router();

//////////////////////////////////
// Routes
//////////////////////////////////
const imageRoutes = require('./image.routes');
const openaiRoutes = require('./openai.routes');

router.use('/images', imageRoutes);
router.use('/openai', openaiRoutes);

module.exports = router;