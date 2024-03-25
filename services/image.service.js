const Image = require('../models/image.model');

module.exports = {
    /**
     * Upload an image
     * @param {*} originalname 
     * @param {*} mimetype 
     * @param {*} size
     * @param {*} buffer 
     * @returns 
     */
      uploadImage: async (originalname, mimetype, size, buffer) => {
        try {
          const image = new Image({
            name: originalname,
            type: mimetype,
            size,
            data: buffer
          });
          return await image.save();
        } catch (error) {
          throw new Error(`Error uploading image: ${error.message}`);
        }
    },
    /**
     * Get an image by _id
     * @param {*} id mongoose id of the image
     * @returns 
     */
    getImageById: async (id) => {
        try {
          return await Image.findById(id);
        } catch (error) {
          throw new Error(`Error retrieving image: ${error.message}`);
        }
    },
    /**
     * Delete an image by _id
     * @param {*} id mongoose id of the image
     * @returns 
     */
    deleteImage: async (id) => {
        try {
          return await Image.findByIdAndDelete(id);
        }
        catch (error) {
          throw new Error(`Error deleting image: ${error.message}`);
        }
    }
}