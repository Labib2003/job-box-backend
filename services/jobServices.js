const Job = require("../models/Job");

module.exports.getAllJobsService = () => Job.find({});
module.exports.postNewJobService = (data) => new Job(data).save();
module.exports.applyToJobService = (id, data) =>
Job.findByIdAndUpdate(id, {
    $push: {
        applicants: data,
    },
});
module.exports.getJobByIdService = (id) => Job.findById(id);
