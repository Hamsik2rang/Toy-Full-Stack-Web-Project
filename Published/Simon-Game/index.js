var buttonColor = ["red", "blue", "yellow", "green"];
var answer = [];
var playerAnswer = [];
var isGameOver = false;
var isPlayingSequence = false;
var level = 0;
var clickCount = 0;

$(document).ready(function () {
  // Set Event Listeners
  $(document).on("keydown", startGame);
  $(".btn").on("click", function () {
    if (level === 0 || isGameOver || isPlayingSequence) {
      return;
    }
    var index = 0;
    switch ($(this).attr("id")) {
      case "red":
        index = 0;
        break;
      case "blue":
        index = 1;
        break;
      case "yellow":
        index = 2;
        break;
      case "green":
        index = 3;
        break;
    }
    playerAnswer.push(index);
    playEffect(index);
    if (index !== answer[clickCount++]) {
      gameOver();
    } else if (clickCount === level) {
      setTimeout(nextSequence, 500);
    }
  });

  function startGame(e) {
    answer = [];
    playerAnswer = [];
    if (e.key == "a" && level === 0) {
      nextSequence();
    }
  }

  function gameOver() {
    isGameOver = true;
    level = 0;
    clickCount = 0;
    $("body").addClass("game-over");
    var audio = new Audio("./sounds/wrong.mp3");
    audio.play();
    $("h1#level-title").text("Press A Key to Start");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
  }

  function nextSequence() {
    isPlayingSequence = true;

    $("h1#level-title").text("Level " + ++level);
    var next = Math.floor(Math.random() * 4);
    answer.push(next);
    playEffect(next);
    playerAnswer = [];
    clickCount = 0;

    isPlayingSequence = false;
  }

  function playEffect(buttonNum) {
    var audio = new Audio("./sounds/" + buttonColor[buttonNum] + ".mp3");
    audio.play();

    $("#" + buttonColor[buttonNum]).addClass("pressed");
    setTimeout(function () {
      $("#" + buttonColor[buttonNum]).removeClass("pressed");
    }, 100);
  }
});
