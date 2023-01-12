const User = require("../models/User");

module.exports.getUserByEmailService = (email) =>
  User.findOne({ email: email });
module.exports.addNewUserService = (data) => new User(data).save();
