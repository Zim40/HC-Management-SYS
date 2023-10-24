// Activties model
// Activity Model will hold activities related to timesheet entries ( multiple fields filled by seeder already ).

const { Schema, model } = require('mongoose');
const mongoose = require('mongoose')

const activitySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;