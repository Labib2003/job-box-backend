const express = require("express");
const {
  sendNewMessageAsEmployer,
  sendMessageAsCandidate,
  getMessagesForEmployer,
  getMessagesForCandidate,
} = require("../controllers/directMessagesControllers");

const directMessagesRouter = express.Router();

directMessagesRouter.route("/employer").post(sendNewMessageAsEmployer);
directMessagesRouter.route("/candidate").post(sendMessageAsCandidate);
directMessagesRouter.route("/employer/:email").get(getMessagesForEmployer);
directMessagesRouter.route("/candidate/:email").get(getMessagesForCandidate);

module.exports = directMessagesRouter;
