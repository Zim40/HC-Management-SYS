const { Employee } = require("../models/index.js");
const mongoose = require("mongoose");

// POST clockIn / clockOut routes
console.log("Before module export");

async function clockIn(req, res) {
  try {
    const timestamp =  new Date();
    console.log(timestamp)

    const employee = await Employee.findById(req.body._id);
    if (!employee) {
      return res.status(404).json({ message: "Employee Not Found" });
    }
    console.log(employee);

    employee.clockInOut.push({
      timestamp: timestamp,
      type: req.body.type, // Make sure you have the 'type' in your req.body
    });

    const updatedEmployee = await employee.save();
    console.log(updatedEmployee);
    
    res.status(200).json({ message: `Employee Clocked In at ${timestamp}`})
  } catch {
    res.status(500).json({ message: "Error Server side clock in feature" });
  }
}
module.exports = {
  clockIn,
};
