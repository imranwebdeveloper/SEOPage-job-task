const cors = require("cors");
const express = require("express");
require("dotenv").config();

const { connectDB } = require("./connections/connectMongoDB");

const app = express();
app.use(express.json());
app.use(cors());

app.use(require("./routers/task"));

app.listen(process.env.PORT | 5001, () => {
  connectDB();
  console.log("Server listening on port " + 5001);
});
