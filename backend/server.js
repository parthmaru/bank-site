const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routes = require("./routes/routes");
const cors = require("cors");

dotenv.config();

mongoose.connect(
  process.env.DATABASE_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => console.log("MongoDb connected")
);

app.use(express.json());
app.use(cors());
app.use("/bank", routes);

app.listen(5000, () => console.log("Server is running..."));
