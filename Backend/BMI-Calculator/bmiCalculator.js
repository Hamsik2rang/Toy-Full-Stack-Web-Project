//jshint esversion:6

const express = require("express");
const { pathToFileURL } = require("url");
const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var height = req.body.height;
  var weight = req.body.weight;

  var bmi = Math.round(weight / ((height / 100) * (height / 100)));

  res.send("Your BMI is " + bmi);
});

app.listen(3000, () => {
  console.log("SERVER::ON PORT:3000");
});
