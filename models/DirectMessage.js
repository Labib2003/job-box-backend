const mongoose = require("mongoose");
const validator = require("validator");

const directMessageSchema = mongoose.Schema(
  {
    from: {
      type: String,
      required: true,
      validate: [validator.isEmail, "Invalid email"],
    },
    to: {
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
