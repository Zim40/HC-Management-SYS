// Activties mdoel

const { Schema, model } = require('mongoose');
const mongoose = require('mongoose')

const activitySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
});

const Activity = mongoose.model('Activity', activitySchema);
console.log(Activity)
module.exports = Activity;