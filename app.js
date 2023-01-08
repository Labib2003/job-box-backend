const express = require("express");
const cors = require("cors");
const jobRoute = require("./routes/jobRoute");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/jobs", jobRoute);

app.get("/", (req, res) => {
  res.send("Hello world");
});

module.exports = app;
