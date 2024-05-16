// >> 🏠 DOM elements
const musicBox = document.querySelector(".musicBox");
const audio = document.querySelector("audio");

// >> 💡 Initializations
let isPlaying = false;
audio.loop = true;
audio.volume = 0.3;


// >> 🧁 Functions


// >> 🐼 Event Listeners
musicBox.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    musicBox.innerHTML = '<i class="fa-solid fa-volume-mute"></i>';
  } else {
    audio.play();
    isPlaying = true;
    musicBox.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
  }
});
