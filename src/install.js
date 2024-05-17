// >> 🏠 DOM elements
const musicBox = document.querySelector(".musicBox");
const audio = document.querySelector("audio");
const containsTitles = document.querySelectorAll(
  ".moreInfoSections .contain .title"
);
const rowOfImages = document.querySelectorAll(".rowofimages div img");
const mainimage = document.querySelector(".mainimage img");

// >> 💡 Initializations
let isPlaying = false;
audio.volume = 0.3;

// >> 🧁 Functions
function loopAudio() {
  audio.currentTime = 0;
  audio.play();
}

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

audio.addEventListener("ended", loopAudio);

containsTitles.forEach(function (title) {
  title.addEventListener("click", () => {
    let parentElement = title.parentNode;
    let middleCon = parentElement.querySelector(".middle");
    middleCon.classList.toggle("hide");

    // Update the icon class based on the state of middleCon
    let icon = title.querySelector("i");
    if (middleCon.classList.contains("hide")) {
      icon.classList.remove("fa-caret-up");
      icon.classList.add("fa-caret-down");
    } else {
      icon.classList.remove("fa-caret-down");
      icon.classList.add("fa-caret-up");
    }
  });
});

rowOfImages.forEach(function (selectedImage) {
  selectedImage.addEventListener("click", () => {
    rowOfImages.forEach(function (image) {
      let parentElement = image.parentNode;
      parentElement.classList.remove("selected");
    });

    let imageURL = selectedImage.getAttribute("src");
    let parentElement = selectedImage.parentNode;

    parentElement.classList.add("selected");
    mainimage.setAttribute("src", imageURL);
  });
});
