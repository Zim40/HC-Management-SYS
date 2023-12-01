const { Employee } = require("../models/index");
// const { signToken } = require('../utils/auth');
// Dont forget to return token with user data in res-response

module.exports = {
  // POST A NEW USER
  async createUser(req, res) {
    // Check if 1 admin already exists
    if (req.body.role !== 'ADMIN') {
      try {
        const user = await Employee.create(req.body);
        // const token = signToken(user);
        console.log(user);
        return res
          .status(200)
          .json({ message: 'New user created', data: { user } });
      } catch (err) {
        console.error(err);
        return res
          .status(500)
          .json({ message: 'Server side ERROR creating User.' });
      }
    } else {
      // Check if 1 admin already exists
      const existingAdmin = await Employee.findOne({ role: 'ADMIN' });
      if (existingAdmin) {
        return res.status(404).json({ message: 'Admin Already Registered' });
      }
  
      try {
        const user = await Employee.create(req.body);
        
        // const token = signToken(user);
      
        return res
          .status(200)
          .json({ message: 'New user created', data: { user } });
      } catch (err) {
        console.error(err);
        return res
          .status(500)
          .json({ message: 'Server side ERROR creating User.' });
      }
    }
  },
  //   GET ALL USERS
  async getAllUsers(req, res) {
    try {
      const user = await Employee.find();
      return res
        .status(200)
        .json({ message: " All Users retrieved ", data: user });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ message: " Server side ERROR retrieving all Users. " });
    }
  },

};
