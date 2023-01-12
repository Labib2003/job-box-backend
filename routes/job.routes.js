const express = require("express");
const {
  getAllJobs,
  applyToJob,
  getJobById,
  postNewJob,
  getAllOpenJobs,
  getJobByEmployerEmail,
  getJobByCandidateEmail,
  closeJobPost,
  approveCandidate,
  addQuery,
} = require("../controllers/jobControllers");

const jobRouter = express.Router();

jobRouter.route("/").get(getAllJobs).post(postNewJob);
jobRouter.route("/open").get(getAllOpenJobs);
jobRouter.route("/employer/:email").get(getJobByEmployerEmail);
jobRouter.route("/candidate/:email").get(getJobByCandidateEmail);
jobRouter.route("/apply/:id").put(applyToJob);
jobRouter.route("/get/:id").get(getJobById);
jobRouter.route("/close/:id").patch(closeJobPost);
jobRouter.route("/approve/:id").put(approveCandidate);
jobRouter.route("/query/:id").put(addQuery);

module.exports = jobRouter;
