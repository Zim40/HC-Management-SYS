// Connection to MongoDB database
require('dotenv')
const mongoose = require('mongoose');

const url = process.env.CONNECTION

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection;