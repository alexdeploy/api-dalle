const express = require('express');
const router = express.Router();

//////////////////////////////////
// Routes
//////////////////////////////////
const imageRoutes = require('./image.routes');

router.use('/image', imageRoutes);

module.exports = router;