const app = require("./app.js");
const connectToDb = require("./utils/connectToDb.js");
const port = process.env.PORT || 5000;

connectToDb();

app.listen(port, () => {
  console.log("Server running on port:", port);
});
