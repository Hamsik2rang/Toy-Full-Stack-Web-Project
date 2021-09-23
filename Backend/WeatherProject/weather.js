const { urlencoded } = require("body-parser");
const express = require("express");
const https = require("https");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const city = req.body.cityName;
  const apiKey = "45ccc242b1d28a73faa5325dc597d6a2";
  const unit = "metric";

  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    apiKey +
    "&units=" +
    unit;
  var weatherInfo;
  https.get(url, function (response) {
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const iconImgURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      res.write(
        "<h1>The temperature in " +
          city +
          " is " +
          temp +
          " degree Celcius, The Weather is currently " +
          description +
          "</h1>"
      );
      res.write("<img src=" + iconImgURL + ">");
      res.send();
    });
  });
});

app.listen(3000, function () {
  console.log("SERVER IS RUNNING ON PORT 3000");
});
