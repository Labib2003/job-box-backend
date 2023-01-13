const {
  sendNewMessageAsEmployerService,
  sendMessageAsCandidateService,
  getMessagesForEmployerService,
  getMessagesForCandidateService,
} = require("../services/directMessagesServices");

module.exports.sendNewMessageAsEmployer = async (req, res) => {
  try {
    console.log(req.body);
    const response = await sendNewMessageAsEmployerService(req.body);

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
module.exports.sendMessageAsCandidate = async (req, res) => {
  try {
    const response = await sendMessageAsCandidateService(req.body);
    if (!response.modifiedCount) {
      return res.status(500).json({
        success: false,
        message: "Chat not found",
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

module.exports.getMessagesForEmployer = async (req, res) => {
  try {
    const response = await getMessagesForEmployerService(req.params.email);

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
module.exports.getMessagesForCandidate = async (req, res) => {
  try {
    const response = await getMessagesForCandidateService(req.params.email);

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
