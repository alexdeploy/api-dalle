require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const routes = require('./routes/routes');
const database = require('./config/database');

const app = express();

const PORT = process.env.PORT;

// Enable CORS
app.use(cors());

// Enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Enable api logging
app.use(morgan('dev'));

app.use('/api', routes);

app.listen(PORT, () => {
    console.log('Server is running on port 3000');
});