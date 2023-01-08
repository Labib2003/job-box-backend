const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Invalid email."],
  },
  gender: {
    type: String,
    required: true,
    enums: ["Male", "Female", "Other"],
  },
  companyName: {
    type: String,
    trim: true,
  },
  employeeRange: {
    type: String,
    trim: true,
  },
  companyCategory: {
    type: String,
    trim: true,
  },
  roleInCompany: {
    type: String,
    trim: true,
  },
  country: {
    type: String,
    trim: true,
  },
  address: {
    type: String,
    trim: true,
  },
  city: {
    type: String,
    trim: true,
  },
  term: {
    type: Boolean,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["employer", "candidate"],
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
