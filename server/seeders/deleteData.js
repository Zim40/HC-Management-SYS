const db = require('../config/connection');
const mongoose = require('mongoose')
const Employee = require('../models/Employee');


async function deleteData () {
    try {
        await Employee.deleteMany({});
        mongoose.disconnect();
    } catch (error) {
        console.log("Error:", error)
    }
};
deleteData();
