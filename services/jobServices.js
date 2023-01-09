const Job = require("../models/Job");

module.exports.getAllJobsService = () => Job.find({});
module.exports.getJobByIdService = (id) => Job.findById(id);
module.exports.applyToJobService = (id, data) =>
  Job.findByIdAndUpdate(id, {
    $push: {
      applicants: data,
    },
  });
