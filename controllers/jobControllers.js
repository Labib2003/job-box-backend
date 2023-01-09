const {
  getAllJobsService,
  applyToJobService,
  getJobByIdService,
  postNewJobService,
} = require("../services/jobServices");

module.exports.getAllJobs = async (req, res) => {
  try {
    const response = await getAllJobsService();

    res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports.postNewJob = async (req, res) => {
  try {
    const response = await postNewJobService(req.body);

    res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports.getJobById = async (req, res) => {
  try {
    const response = await getJobByIdService(req.params.id);

    res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports.applyToJob = async (req, res) => {
  try {
    const response = await applyToJobService(req.params.id, req.body);

    res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
