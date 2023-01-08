const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

mongoose.set('strictQuery', false);
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.sjztcal.mongodb.net/jobbox`;

const connectToDb = async () => {
  const res = await mongoose
    .connect(uri)
    .then(mongoose.connection)
    .catch((err) => console.log(err));
  console.log("Database connection successful.");
};

module.exports = connectToDb;
