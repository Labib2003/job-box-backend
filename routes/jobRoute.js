const express = require("express");
const { getAllJobs } = require("../controllers/jobControllers");

const jobRoute = express.Router();

jobRoute.route("/").get(getAllJobs);

module.exports = jobRoute;
