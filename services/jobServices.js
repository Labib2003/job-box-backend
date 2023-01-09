const Job = require("../models/Job");

module.exports.getAllJobsService = () => Job.find({});
module.exports.getAllOpenJobsService = () => Job.find({ isOpen: true });
module.exports.getJobByRecruiterEmailService = (email) =>
  Job.find({ postedBy: email });
module.exports.postNewJobService = (data) => new Job(data).save();
module.exports.applyToJobService = async (id, data) => {
  const job = await Job.findById(id);

  if (job.applicants.find((applicant) => applicant.email === data.email)) {
    return {
      error: "Cannot apply for the same job twice",
    };
  }

  return Job.findByIdAndUpdate(id, {
    $push: {
      applicants: data,
    },
  });
};
module.exports.getJobByIdService = (id) => Job.findById(id);
