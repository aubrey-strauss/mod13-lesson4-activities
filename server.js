require("dotenv").config(); //Reads .env and puts its values in process.env

const express = require("express"); // loads the express tool

const mongoose = require("mongoose");

const app = express(); // creates the server

const PORT = process.env.PORT || 3000;
// This is called "middleware bc it runs in the middle, between the request arriving and your route handling"
app.use(express.json()); // Turn JSON request bodies into req.body

//Connect to database first, then start the server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to MongoDB");

    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`),
    ); //starts the server
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });
