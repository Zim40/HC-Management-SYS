// Employee model
const { Schema } = require("mongoose");
const mongoose = require('mongoose')


const employeeSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['ADMIN', 'EMPLOYEE', 'VISITOR'],
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },

  clockInOut: [
    {
      timestamp: {
        type: Date,
        required: true,
      },
      type: {
        type: String, //'In' or 'Out'
        required: true,
      },
    },
  ],
 
});




const Employee = mongoose.model('Employee', employeeSchema);
console.log("Employee created Schema")
module.exports = Employee;
