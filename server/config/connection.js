// Connection to MongoDB database
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/HC-Management', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection;