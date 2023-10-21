// Employee model
const { Schema, model } = require("mongoose");
const mongoose = require('mongoose')
const Activity = require('./Activity');

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
    required: true,
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
  // timesheets: [
  //   {
  //     date: {
  //       type: Date,
  //       required: true,
  //     },
  //     activities: [
  //       {
  //         activityId: {
  //           type: mongoose.Schema.Types.ObjectId,
  //           ref: "Activity",
  //         },
  //         hoursWorked: Number,
  //       },
  //     ],
  //   },
  // ],
});

const Employee = mongoose.model('Employee', employeeSchema);
console.log("Employee created Schema")
module.exports = Employee;
