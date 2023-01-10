const mongoose = require("mongoose");
const validator = require("validator");

// only employer can start a new DM
const directMessageSchema = mongoose.Schema(
  {
    employer: {
      type: String,
      required: true,
      validate: [validator.isEmail, "Invalid email"],
    },
    candidate: {
      type: String,
      required: true,
      validate: [validator.isEmail, "Invalid email"],
    },
    conversation: [
      {
        role: {
          type: String,
          required: true,
          enum: ["employer", "candidate"],
        },
        message: {
          type: String,
          required: true,
          trim: true,
        },
      },
    ],
  },
  {
    collection: "directMessages",
  }
);

const DirectMessage = mongoose.model("DM", directMessageSchema);
module.exports = DirectMessage;
