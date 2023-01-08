const Job = require("../models/Job");

module.exports.getAllJobsService = () => Job.find({});
