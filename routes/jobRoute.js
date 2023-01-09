const express = require("express");
const {
  getAllJobs,
  applyToJob,
  getJobById,
  postNewJob,
} = require("../controllers/jobControllers");

const jobRoute = express.Router();

jobRoute.route("/").get(getAllJobs).post(postNewJob);
jobRoute.route("/apply/:id").patch(applyToJob);
jobRoute.route("/:id").get(getJobById);

module.exports = jobRoute;
