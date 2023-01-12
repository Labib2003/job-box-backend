const express = require("express");
const { getUserByEmail, addNewUser } = require("../controllers/userConrollers");

const userRouter = express.Router();

userRouter.route("/").post(addNewUser);
userRouter.route("/:email").get(getUserByEmail);

module.exports = userRouter;
