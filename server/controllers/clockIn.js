const  { Employee }  = require("../models/index.js");
const mongoose = require('mongoose');

// POST clockIn / clockOut routes

 module.exports= { 
    clockIn: async (req, res) => {
    try {
      const { _id, type } = req.body;
      const timestamp = new Date();
      console.log(timestamp);

      const employee = await Employee.findById(_id);
      console.log("Found Employee", employee);

      if (!employee) {
        console.log("Employee Not Found")
        return res.status(404).json({ message: "Employee not found" });
      }

      const addClockIn = await Employee.findOneAndUpdate(
        { _id: employee }, // Find the employee by _id
        { $addToSet: { clockInOut: req.body,
                       timestamp } },
        { new: true } // Optionally, use this to return the updated document
      );

      await addClockIn.save();

      res
        .status(200)
        .json({ message: "ClockIn/Out successful", data: employee });
    } catch (err) {
      res.status(500).json({ message: "Error Server side clock in feature" });
    }
  }
}
console.log("clockIn controller");

 

