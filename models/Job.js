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
      enum: ["Easy", "Medium", "Hard"],
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
          id: {
            type: ObjectId,
            ref: "Candidate",
          },
          email: String,
        },
      ],
    },
    queries: [
      {
        email: {
          type: String,
          validate: validator.isEmail,
        },
        question: {
          type: String,
          trim: true,
        },
        reply: [String],
      },
    ],
  },
  {
    collection: "job",
  }
);

const Job = mongoose.model("Job", jobSchema);
module.exports = Job;
