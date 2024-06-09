// Import Package
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// Usefull Package
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Import Constant 
const port = 2121;
const URL = "mongodb+srv://reveraca1:wpvyciSgZEd8VLas@revercenter.fbkszho.mongodb.net/?retryWrites=true&w=majority&appName=ReverCenter";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoose.connect(URL).then(() => {
  console.log("Connected!");
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});
