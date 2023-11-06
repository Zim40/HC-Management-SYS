const { Employee } = require("../models/index");

module.exports = {
  // POST A NEW USER
  async createUser(req, res) {
    try {
      const user = await Employee.create(req.body);
      return res
        .status(200)
        .json({ message: " New user created ", data: user });
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
