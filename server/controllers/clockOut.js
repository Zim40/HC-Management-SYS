const { Employee } = require("../models/index");
const mongoose = require('mongoose');

// POST clockOut
async function clockOut(req, res) {
  try {
    // Fetch current timestamp
    const timestamp = new Date();

    // Find employee by _id included in req.body
    const employee = await Employee.findById(req.body._id);

    // Check if employee exists, if not return json message
    if (!employee) {
      return res.status(404).json({ message: "Employee Not Found" });
    }
    
    // Access Employee model clockInOut field and push new clock in timestamp and autofill type.
    employee.clockInOut.push({
      timestamp: timestamp,
      type: "Out",
    });

    // Save updated employee model with new clockOut time and type
    const updatedEmployee = await employee.save();
    
    res.status(200).json({ message: `Employee Clocked Out at ${timestamp}` });
    
  } catch  {
    // Error handling
    res.status(500).json({ message: "Error Server side clock Out feature" });
  }
}

module.exports = {
  clockOut,
};
