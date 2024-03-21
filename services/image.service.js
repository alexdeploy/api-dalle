const { OpenAI } = require('openai');

const configuration = {
    apiKey: process.env.OPENAI_API_KEY,
};

const openai = new OpenAI(configuration)

module.exports = {
    createImage: async (promptRequest) => {
        // TODO: Controlar errores o cosas que tengan que ver con el servicio de OpenAI.
        return await openai.images.generate(promptRequest);
    }
};