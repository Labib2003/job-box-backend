const Job = require("../models/Job");

module.exports.getAllJobsService = () => Job.find({});
module.exports.postNewJobService = (data) => new Job(data).save();
module.exports.getAllOpenJobsService = () => Job.find({ isOpen: true });
module.exports.getJobByRecruiterEmailService = (email) =>
  Job.find({ postedBy: email });
module.exports.getJobsAppliedByCandidateService = async (email) => {
  const jobs = await Job.find({});

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
module.exports.approveJobApplicationService = async (jobId, candidateData) => {
  const job = await Job.findById(jobId);

  job.applicants.map((applicant) => {
    if (applicant.email === candidateData.email) {
      applicant.approved = true;
    }
  });

  const res = await Job.findByIdAndUpdate(jobId, {
    $set: job,
  });
  return res;
};

module.exports.addQueryService = (jobId, data) =>
  Job.findByIdAndUpdate(jobId, { $push: { queries: data } });

module.exports.replyToQueryService = async (jobId, data) => {
  const { queryId, answer } = data;
  const job = await Job.findById(jobId);
  console.log(job.queries);

  job.queries.map((query) => {
    if (query._id.toString() === queryId) {
      query.reply = [...query.reply, answer];
    }
  });

  const res = await Job.findByIdAndUpdate(jobId, {
    $set: job,
  });
  return res;
};
