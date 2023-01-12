const { getUserByEmailService, addNewUserService } = require("../services/userServices");

module.exports.getUserByEmail = async (req, res) => {
  try {
    const response = await getUserByEmailService(req.params.email);
    
    if (!response) {
      return res.status(500).json({
        success: false,
        message: "user not found",
      });
    }

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
module.exports.addNewUser = async (req, res) => {
  try {
    const response = await addNewUserService(req.body);

    if (!response) {
      return res.status(500).json({
        success: false,
        message: "user not found",
      });
    }

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
