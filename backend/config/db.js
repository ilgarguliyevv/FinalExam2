const express = require("express");
const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI).then(() => {
  const app = express();

  app.listen(5000, () => {
    console.log("Server has started!");
  });
});
