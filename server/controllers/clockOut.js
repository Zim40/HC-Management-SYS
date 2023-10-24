const { Employee } = require("../models/index");
const mongoose = require('mongoose');

async function clockOut(req, res) {
  try {
    const timestamp = new Date();

    const employee = await Employee.findById(req.body._id);
    if (!employee) {
      return res.status(404).json({ message: "Employee Not Found" });
    }
    
    employee.clockInOut.push({
      timestamp: timestamp,
      type: "Out",
    });

    const updatedEmployee = await employee.save();
    console.log(updatedEmployee);
    res.status(200).json({ message: `Employee Clocked Out at ${timestamp}` });
    
  } catch  {
    res.status(500).json({ message: "Error Server side clock Out feature" });
  }
}

module.exports = {
  clockOut,
};
