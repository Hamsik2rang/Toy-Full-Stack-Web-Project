//jshint esversion:6

const express = require("express");
const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var dec = req.body.dec;
  var bin = req.body.bin;
  var oct = req.body.oct;
  var hex = req.body.hex;
  var writeCount = 0;

  if (dec != "") {
    writeCount++;
  }
  if (bin != "") {
    writeCount++;
  }
  if (oct != "") {
    writeCount++;
  }
  if (hex != "") {
    writeCount++;
  }

  if (writeCount > 1) {
    res.send("You Should Write Only 1 Form. Page will redirect in 3 seconds.");
    setTimeout(res.redirect, 2000, __dirname + "/index.html");
  } else {
    const digit = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];

    if (dec != "") {
      var num = Number(dec);

      for (var i = 0; num > 0; i++) {
        console.log("cur num : " + num);
        bin = String(Math.floor(num % 2)) + bin;
        num = Math.floor(num / 2);
      }

      num = Number(dec);
      for (var i = 0; num > 0; i++) {
        oct = String(Math.floor(num % 8)) + oct;
        num = Math.floor(num / 8);
      }

      num = Number(dec);

      for (var i = 0; num > 0; i++) {
        hex = digit[Math.floor(num % 16)] + hex;
        num = Math.floor(num / 16);
      }

      res.send(
        "dec : " + dec + " bin : " + bin + " oct : " + oct + " hex : " + hex
      );
    }
  }
  if (bin !== "") {
  }

  console.log(req.body);

  //res.send(req.body);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
