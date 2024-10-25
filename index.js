const express = require("express");
const cors = require("cors");
const ConnectToMongo = require("./database");

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

ConnectToMongo();

app.use("/app/api", require("./routes/StudentListing"));

app.listen(500, () => {
  console.log("backend app running on port 500 🥳");
});
