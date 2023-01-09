const express = require("express");
const {
  getAllJobs,
  applyToJob,
  getJobById,
  postNewJob,
  getAllOpenJobs,
  getJobByEmployerEmail,
} = require("../controllers/jobControllers");

const jobRouter = express.Router();

jobRouter.route("/").get(getAllJobs).post(postNewJob);
jobRouter.route("/open").get(getAllOpenJobs);
jobRouter.route("/employer/:email").get(getJobByEmployerEmail);
jobRouter.route("/apply/:id").patch(applyToJob);
jobRouter.route("/get/:id").get(getJobById);

module.exports = jobRouter;
