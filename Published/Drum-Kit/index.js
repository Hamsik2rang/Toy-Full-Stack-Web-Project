document.addEventListener("keydown", playAudio);
document.addEventListener("keydown", playAnim);

function playAudio(event) {
  switch (event.key) {
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
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
  }
}

function playAnim(event) {
  key = document.querySelector("." + event.key);
  key.classList.add("pressed");
  setTimeout(stopAnim, 100, event);
}

function stopAnim(event) {
  key = document.querySelector("." + event.key);
  key.classList.remove("pressed");
}
