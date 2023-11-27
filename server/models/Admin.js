// Seperate Admin from Employee's

const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const adminSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    lastName: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["ADMIN", "EMPLOYEE", "VISITOR"],
    required: true,
  },
});

adminSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

adminSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
