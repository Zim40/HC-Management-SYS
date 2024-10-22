// Employee model
const { Schema } = require("mongoose");
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


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
    default: 'EMPLOYEE',
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
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
 
});

employeeSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

employeeSchema.virtual("formattedClockInOut").get(function () {
  return this.clockInOut.map(entry => ({
    timestamp: new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      // second: 'numeric',
      // timeZoneName: 'short',
    }).format(entry.timestamp),
    type: entry.type,
  }))
})

employeeSchema.set('toObject', { virtuals: true });
employeeSchema.set('toJSON', { virtuals: true });






employeeSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};




const Employee = mongoose.model('Employee', employeeSchema);
console.log("Employee created Schema")
module.exports = Employee;
