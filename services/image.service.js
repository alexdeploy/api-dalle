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
    },
    /**
     * Get images with pagination
     * @returns 
     */
    getImages: async (options) => {
      const { page = 1, limit = 1, sortBy = 'createdAt', sortOrder = 'desc' } = options;
      try {
        const totalImages = await Image.countDocuments();
        const totalPages = Math.ceil(totalImages / limit);

        if (page > totalPages) {
          throw new Error('Page out of bounds');
        }

        const images = await Image.find()
          .sort({ [sortBy]: sortOrder })
          .skip((page - 1) * limit)
          .limit(limit)
          .select('_id name type createdAt');

        // Generate image URLs for each image
        const imageUrls = images.map(image => {
          return {
            _id: image._id,
            name: image.name,
            type: image.type,
            createdAt: image.createdAt,
            url: `${process.env.BASE_URL}/images/${image._id}`
          };
        });

        return {
          totalImages,
          totalPages,
          page: parseInt(page),
          limit: parseInt(limit),
          images: imageUrls
        }
      } catch (error) {
        throw new Error(`Error retrieving images: ${error.message}`);
      }
    }
}