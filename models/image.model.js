const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    name: String,
    type: String,
    size: Number,
    data: Buffer, // Almacenamos los datos binarios de la imagen
    createdAt: { type: Date, default: Date.now }
  });

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;