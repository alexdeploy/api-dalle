const imageService = require('../services/image.service');

module.exports = {
    /**
     * Upload an image
     * @param {*} req 
     * @param {*} res 
     * @returns
     */
    uploadImage: async (req, res) => {
        try {
            const { originalname, mimetype, size, buffer } = req.file;
            const image = await imageService.uploadImage(originalname, mimetype, size, buffer);
            return res.json(image);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    /**
     * Get an image by _id
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    getImage: async (req, res) => {
        try {
            const image = await imageService.getImageById(req.params.id);
            if (!image) {
              return res.status(404).json({ message: "Image not found" });
            }
            res.set('Content-Type', image.type);
            return res.send(image.data);
          } catch (error) {
            return res.status(500).json({ message: error.message });
          }
      },
    /**
     * Delete an image by _id
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    deleteImage: async (req, res) => {
        try {
            const image = await imageService.deleteImage(req.params.id);
            if (!image) {
                return res.status(404).json({ message: "Image not found" });
            }
            return res.json(image);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    /**
     * Get images with pagination
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    getImages: async (req, res) => {
        try {
            const options = {
                page: req.query.page,
                limit: req.query.limit,
                sortBy: req.query.sortBy,
                sortOrder: req.query.sortOrder
            };
            const images = await imageService.getImages(options);
            return res.json(images);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}