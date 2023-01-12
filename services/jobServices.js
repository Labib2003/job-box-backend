const Job = require("../models/Job");

module.exports.getAllJobsService = () => Job.find({});
module.exports.postNewJobService = (data) => new Job(data).save();
module.exports.getAllOpenJobsService = () => Job.find({ isOpen: true });
module.exports.getJobByRecruiterEmailService = (email) =>
  Job.find({ postedBy: email });
module.exports.getJobsAppliedByCandidateService = async (email) => {
  const jobs = await Job.find({ isOpen: true });

  const appliedJobs = [];
  jobs.forEach((job) => {
    if (job.applicants.find((applicant) => applicant.email === email)) {
      appliedJobs.push(job);
    }
  });

  return appliedJobs;
};
module.exports.applyToJobService = async (id, data) => {
  const job = await Job.findById(id);

  if (job.applicants.find((applicant) => applicant.email === data.email)) {
    return {
      error: "Cannot apply for the same job twice",
    };
  }

  console.log(job, data);
  return Job.findByIdAndUpdate(id, {
    $push: {
      applicants: { email: data.email },
    },
  });
};
module.exports.getJobByIdService = (id) => Job.findById(id);
module.exports.closeJobPostService = (id) =>
  Job.findByIdAndUpdate(id, { isOpen: false });
