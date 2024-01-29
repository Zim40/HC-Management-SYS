const { Employee } = require("../models/index.js");
const mongoose = require("mongoose");

// POST clockIn 
console.log("Before module export");

async function clockIn(req, res) {
  try {
    // Fetch current timestamp
    const timestamp = new Date();
    
    // Find employee by _id included in req.body
    const employee = await Employee.findById(req.body._id);

    // Check if employee exists, if not return json message.
    if (!employee) {
      return res.status(404).json({ message: "Employee Not Found" });
    }
    
    // Access Employee model clockInOut field and push new clock in timestamp and autofill type.
    employee.clockInOut.push({
      timestamp: timestamp,
      type: "In", 
    });

    // Save updated employee model with new clockIn time and type. 
    const updatedEmployee = await employee.save();

    res.status(200).json({ message: `Employee Clocked In at ${timestamp}` });

  } catch {
    // Error handling
    res.status(500).json({ message: "Error Server side clock in feature" });
  }
}

module.exports = {
  clockIn,
};
