const DirectMessage = require("../models/DirectMessage");

module.exports.sendNewMessageAsEmployerService = async (message) => {
  const checkTo = await DirectMessage.findOne({ to: message.to });
  const checkFrom = await DirectMessage.findOne({ from: message.from });



  if (checkFrom) {
    if (checkTo) {
      console.log("pushing into existing");
      return DirectMessage.updateOne(
        { to: message.to, from: message.from },
        {
          $push: {
            conversation: { ...message.message, role: "employer" },
          },
        }
      );
    } else {
      console.log("creating new");
      return new DirectMessage({
        from: message.from,
        to: message.to,
        conversation: [{ ...message.message, role: "employer" }],
      }).save();
    }
  } else {
    console.log("creating new");
    return new DirectMessage({
      from: message.from,
      to: message.to,
      conversation: [{ ...message.message, role: "employer" }],
    }).save();
  }
};

module.exports.sendMessageAsCandidateService = (message) =>
  DirectMessage.updateOne(
    { to: message.to, from: message.from },
    {
      $push: {
        conversation: { ...message.message, role: "candidate" },
      },
    }
  );
