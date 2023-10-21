// const db = require('../config/connection');
// const mongoose = require('mongoose')
// const Employee = require('../models/Employee');
// const Activity = require('../models/Activity');
// const predefinedActivity = require('../models/ActivityData');

// // Sample data for employees
// const employeesData = [
//     {
//       firstName: "John",
//       lastName: "Doe",
//       role: "Cooper",
//       clockInOut: [
//         { timestamp: new Date(), type: "In" },
//         { timestamp: new Date(), type: "Out" },
//       ],
//       // timesheets: [
//       //   {
//       //     date: new Date(),
//       //     activities: [
//       //       {
//       //         activityId: new mongoose.Types.ObjectId(), // Replace with a valid Activity ID
//       //         hoursWorked: 8,
//       //       },
//       //     ],
//       //   },
//       // ],
//     },
    
//   ];
  
//   async function seedDatabase() {
//     try {
//       // Clear the existing data (optional)
//       await Employee.deleteMany({});
//       await Activity.deleteMany({});

//      // You can also seed Activity data here if necessary
//      const activity = await Activity.insertMany(predefinedActivity)
  
//       // Insert the sample employee data
//       const employees = await Employee.insertMany(employeesData);
      
  
//       console.log("Database seeded with employees:");
//       console.log(employees);
  
   
//       // Disconnect from the database
//       mongoose.disconnect();
//     } catch (error) {
//       console.error("Error seeding the database:", error);
//     }
//   }
  
//   // Call the seedDatabase function to start seeding
//   seedDatabase();