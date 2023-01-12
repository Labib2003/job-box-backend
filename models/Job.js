const mongoose = require("mongoose");
const validator = require("validator");

const { ObjectId } = mongoose.Schema.Types;

const jobSchema = mongoose.Schema(
  {
    position: {
      type: String,
      required: true,
      trim: true,
    },
    isOpen: {
      type: Boolean,
      default: true,
    },
    postedBy: {
      type: String,
      required: true,
      validate: [validator.isEmail, "Invalid email"],
    },
    companyName: {
      type: String,
      required: true,
      trim: true,
    },
    experience: {
      type: String,
      required: true,
      trim: true,
    },
    workLevel: {
      type: [String],
      required: true,
    },
    employmentType: {
      type: String,
      required: true,
      trim: true,
    },
    salaryRange: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    overview: {
      type: String,
      required: true,
    },
    responsibilities: {
      type: [String],
      required: true,
    },
    skills: {
      type: [String],
      required: true,
    },
    requirements: {
      type: [String],
      required: true,
    },
    applicants: {
      type: [
        {
          email: {
            type: String,
            validate: [validator.isEmail, "Invalid email"],
          },
          approved: {
            type: Boolean,
            default: false,
          },
        },
      ],
      unique: false,
    },
    queries: {
      type: [
        {
          email: {
            type: String,
            validate: [validator.isEmail, "Invalid email"],
          },
          question: {
            type: String,
            trim: true,
          },
          reply: [String],
        },
      ],
    },
  },
  {
    collection: "jobs",
    timestamps: true,
  }
);

const Job = mongoose.model("Job", jobSchema);
module.exports = Job;
