const express = require("express");
const WorkoutRouter = require("./routes/workout");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const UserRouter = require("./routes/user");

//express app
const app = express();

app.use(cors());
//middleware
app.use(express.json());

//routes
app.use("/workout", WorkoutRouter);
app.use("/user", UserRouter);
//saname
//
//

//listening for request

const url = process.env.MONGO_UR;

app.listen(process.env.PORT, async () => {
  try {
    await mongoose.connect(url);

    console.log("Connected to MongoDB");
    console.log("Listening on port 4000");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
});
