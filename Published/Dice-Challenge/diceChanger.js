var playerOneNum = Math.floor(Math.random() * 6) + 1;
var playerTwoNum = Math.floor(Math.random() * 6) + 1;

var playerOneDiceImgPath = "./images/dice" + playerOneNum + ".png";
var playerTwoDiceImgPath = "./images/dice" + playerTwoNum + ".png";

var playerOneDiceImg = document.querySelector(".img1");
playerOneDiceImg.src = playerOneDiceImgPath;
var playerTwoDiceImg = document.querySelector(".img2");
playerTwoDiceImg.src = playerTwoDiceImgPath;

var refereeText = document.querySelector(".container h1");

if (playerOneNum > playerTwoNum) {
  refereeText.innerHTML = "Player 1 Win";
} else if (playerOneNum < playerTwoNum) {
  refereeText.innerHTML = "Player 2 Win";
} else {
  refereeText.innerHTML = "Draw";
}
