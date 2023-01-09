const express = require("express");
const { sendNewMessageAsEmployer, sendMessageAsCandidate } = require("../controllers/directMessagesControllers");

const directMessagesRouter = express.Router();

directMessagesRouter.route("/employer").post(sendNewMessageAsEmployer);
directMessagesRouter.route("/candidate").post(sendMessageAsCandidate);

module.exports = directMessagesRouter;
