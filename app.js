const express = require("express");
const cors = require("cors");
const jobRouter = require("./routes/job.routes");
const directMessagesRouter = require("./routes/directMessages.routes");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/jobs", jobRouter);
app.use("/api/dms", directMessagesRouter);

app.get("/", (req, res) => {
  res.send("Hello world");
});

module.exports = app;
