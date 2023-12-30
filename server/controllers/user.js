const { Employee } = require("../models/index");
const { signToken } = require('../utils/auth');
const Auth = require('../utils/auth');
// Dont forget to return token with user data in res-response

module.exports = {
  // POST A NEW USER
  async createUser(req, res) {
    // Check if the requested role is not 'ADMIN'
    if (req.body.role !== 'ADMIN') {
      try {
        const user = await Employee.create(req.body);
        const token = signToken(user);
  
        return res
          .status(200)
          .json({ message: 'New user created', data: { token, user } });
      } catch (err) {
        console.error(err);
        return res
          .status(500)
          .json({ message: 'Server side ERROR creating User.' });
      }
    } else {
      // Check if an admin already exists
      const existingAdmin = await Employee.findOne({ role: 'ADMIN' });
  
      if (existingAdmin) {
        return res.status(404).json({ message: 'Admin Already Registered' });
      }
  
      try {
        // Create the user with the role 'ADMIN'
        const user = await Employee.create(req.body);
        const token = signToken(user);
  
        return res
          .status(200)
          .json({ message: 'New user created', data: { token, user } });
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
        .json({ message: " All Users retrieved ", data:  user });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ message: " Server side ERROR retrieving all Users. " });
    }
  },

  async login(req, res) {
    const { firstName, lastName, password} = req.body;
    try {
      const user = await Employee.findOne({firstName, lastName});

      if(!user) {
        return res.status(401).json({ message: "Authentication Failed. User not found "});
      }
      const isValidPassword = await user.isCorrectPassword(password)

      if (!isValidPassword) {
        res.status(401).json({ message: "Authentication Failed. Wrong Password!"});
      }

      const token = Auth.signToken(user._id);
      res.json({ token });

    } catch (err) {
      console.error("Error:", err);
      res.status(500).json({ message: "Internal Server Error."})
    }
  }

};
