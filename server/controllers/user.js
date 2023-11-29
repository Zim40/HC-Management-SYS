const { Employee } = require("../models/index");
const { signToken } = require('../utils/auth');
module.exports = {
  // POST A NEW USER
  async createUser(req, res) {
    // Check if 1 admin already exists
    const existingAdmin = await Employee.find({ role: 'ADMIN'});
    console.log(existingAdmin)
    if(existingAdmin.length >= 0) {
      return res.status(404).json({message: 'Admin Already Registered'});
    }

    try {
      const user = await Employee.create(req.body);
      const token = signToken(user)
      console.log(user);
      return res
        .status(200)
        .json({ message: " New user created ", data: { token, user } });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ message: " Server side ERROR creating User. " });
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
