const imageService = require('../services/image.service');

module.exports = {
    generateImage: async (req, res) => {
        try {
            const { prompt } = req.body;
            if (!prompt) {
                return res.status(400).send('Not prompt provided');
            }
            // Apply image configurations...
            // TODO: Crear clase de promptRequest
            // TODO: Crear modelos de IAs.
            const promptRequest = {
                model: "dall-e-3",
                prompt: prompt,
                n: 1,
                size: '1024x10242'
            };
            const image = await imageService.createImage(promptRequest);

            res.status(201).send({ success: true, data: image.data });
        } catch (error) {
            console.log(error);
            res.status(500).send({ success: false, error: error.error });
        }
    }
}