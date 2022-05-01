const express = require("express");
const app = express();
const mongoose = require("mongoose");
const route = require("./routes/route");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, () => {
  console.log("Database Connected successfully");
});

app.use(express.json());
app.use(cors());
app.use("/app", route);
app.listen(5000, () => {
  console.log("Server is running...");
});
