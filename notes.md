# Employee Management System
 - *This application will handle all employee **clock in / out** activity including **timesheets** used in weekly wage calculations.* <br>
 - *Future features include **Visitor / Contractor** sign in forms and **induction tests**.*

 Below is a basic overview of potential MongoDB Models covering Employee, Activities (including inserting activity names) and Timesheets.
>Future development may require change to these structures.
<details>
<summary>Employee Schema</summary>

 ```js
//  <!-- Employee Schema -->
 const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;
```
</details>
<details>
<summary>Activity Schema / Populate file</summary>

```js
// <!-- Activity Schema -->
const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});
const Activity = mongoose.model('Activity', activitySchema);
module.exports = Activity;
```
```js
// insertMany to populate activity schema
const Activity = require('./activityModel');

const predefinedActivities = [
  {
    name: 'Head Machining',
  },
  {
    name: 'Stave Machining',
  },
  {
    name: 'Assembly',
  },
  {
    name: 'Heading',
  },
  {
    name: 'Finishing',
  },
  {
    name: 'Branding/Wrapping',
  },
  {
    name: 'Heinrich Rework',
  },
  {
    name: 'Imported Barrels Reworks',
  },
  {
    name: 'Contract Barrel Reworks',
  },
  {
    name: 'Warehouse General',
  },
  {
    name: 'Oak Solutions',
  },
  {
    name: 'Training',
  },
  {
    name: 'Miscellaneous',
  },
];

// Add predefined activities to the database
Activity.insertMany(predefinedActivities)
  .then((activities) => {
    // Predefined activities added successfully
  })
  .catch((error) => {
    // Handle any errors
  });

```
</details>
<details>
<summary>Timesheet Schema</summary>

```js
// <!-- timeSheet Schema -->
const mongoose = require('mongoose');

const timesheetSchema = new mongoose.Schema({
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  activity: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Activity',
    required: true,
  },
  hours: {
    type: Number,
    required: true,
  },
});
const Timesheet = mongoose.model('Timesheet', timesheetSchema);
module.exports = Timesheet;
```
</details>