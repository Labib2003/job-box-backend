const { getAllJobsService } = require("../services/jobServices");

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
