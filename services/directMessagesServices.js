const DirectMessage = require("../models/DirectMessage");

module.exports.getMessagesForEmployerService = (employerEmail) =>
  DirectMessage.find({ employer: employerEmail });
module.exports.sendNewMessageAsEmployerService = async (message) => {
  const checkCandidate = await DirectMessage.findOne({
    candidate: message.candidate,
  });
  const checkEmployer = await DirectMessage.findOne({
    employer: message.employer,
  });

  if (checkEmployer) {
    if (checkCandidate) {
      console.log("pushing into existing");
      return DirectMessage.updateOne(
        { candidate: message.candidate, employer: message.employer },
        {
          $push: {
            conversation: { ...message.message, role: "employer" },
          },
        }
      );
    } else {
      console.log("creating new");
      return new DirectMessage({
        employer: message.employer,
        candidate: message.candidate,
        conversation: [{ ...message.message, role: "employer" }],
      }).save();
    }
  } else {
    console.log("creating new");
    return new DirectMessage({
      employer: message.employer,
      candidate: message.candidate,
      conversation: [{ ...message.message, role: "employer" }],
    }).save();
  }
};

module.exports.getMessagesForEmployerService = (candidateEmail) =>
  DirectMessage.find({ employer: candidateEmail });
module.exports.sendMessageAsCandidateService = (message) =>
  DirectMessage.updateOne(
    { candidate: message.candidate, employer: message.employer },
    {
      $push: {
        conversation: { ...message.message, role: "candidate" },
      },
    }
  );
