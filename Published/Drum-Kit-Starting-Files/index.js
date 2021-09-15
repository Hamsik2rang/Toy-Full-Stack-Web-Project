var btnArray = document.querySelectorAll(".drum");

for (var i = 0; i < btnArray.length; i++) {
  btnArray[i].addEventListener("click", function () {
    var key = this.innerHTML;

    switch (key) {
      case "w":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
      case "a":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
      case "s":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
      case "d":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
      case "j":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;
      case "k":
        var audio = new Audio("sounds/kick.mp3");
        audio.play();
        break;
      case "l":
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;
    }
  });
}
