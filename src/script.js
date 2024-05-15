const cardContainer = document.getElementById("cardContainer");
const menuNav = document.getElementById("menuNav");
const openedMenu = document.getElementById("openedMenu");
const closedMenu = document.getElementById("closedMenu");
const photoControls = document.getElementById("photoControls");
const closeBtn = document.getElementById("closeBtn");
const creditsBtn = document.getElementById("creditsBtn");
const photosBtn = document.getElementById("photosBtn");
const creditsSection = document.getElementById("creditsSection");
const photoSetsSection = document.getElementById("photoSetsSection");
const photoSetCloseBtn = document.getElementById("photoSetCloseBtn");
const creditsCloseBtns = document.querySelectorAll(".creditsCloseBtn");
const langBtn = document.getElementById("langBtn");
let mode = langBtn.dataset.lang;
const prevButton = document.querySelector(".leftBtn");
const nextButton = document.querySelector(".rightBtn");

// --------------- //

// document.addEventListener("contextmenu", function (event) {
//   // Prevent the default context menu from appearing
//   event.preventDefault();
// });

// Hover ON
cardContainer.addEventListener("mouseenter", function () {
  if (
    creditsSection.style.display === "block" ||
    photoSetsSection.style.display === "block"
  ) {
    menuNav.style.display = "none";
    photoControls.style.display = "none";
  } else {
    menuNav.style.display = "flex";
    photoControls.style.display = "flex";
  }
  openedMenu.style.display = "none";
  closedMenu.style.display = "flex";
});

//  Hover OFF
cardContainer.addEventListener("mouseleave", function () {
  menuNav.style.display = "none";
  photoControls.style.display = "none";
});

closedMenu.addEventListener("click", function () {
  openedMenu.style.display = "flex";
  closedMenu.style.display = "none";
});

closeBtn.addEventListener("click", function () {
  openedMenu.style.display = "none";
  closedMenu.style.display = "flex";
});

creditsBtn.addEventListener("click", function () {
  openedMenu.style.display = "none";
  photoControls.style.display = "none";
  creditsSection.style.display = "block";
});

creditsCloseBtns.forEach(function (x) {
  x.addEventListener("click", function () {
    creditsSection.style.display = "none";
    menuNav.style.display = "flex";
    closedMenu.style.display = "flex";
    photoControls.style.display = "flex";
  });
});

photoSetCloseBtn.addEventListener("click", function () {
  photoSetsSection.style.display = "none";
  menuNav.style.display = "flex";
  closedMenu.style.display = "flex";
  photoControls.style.display = "flex";
});

// Photcard Set
photosBtn.addEventListener("click", function () {
  openedMenu.style.display = "none";
  photoControls.style.display = "none";
  photoSetsSection.style.display = "block";
});

langBtn.addEventListener("click", function () {
  let p = langBtn.querySelector("p");

  if (mode === "kr") {
    p.textContent = "EN";
    langBtn.dataset.lang = "en";
    creditsSection.querySelector("#koreanCredits").style.display = "none";
    creditsSection.querySelector("#engCredits").style.display = "block";
    photoSetsSection.querySelector("#korH1").style.display = "none";
    photoSetsSection.querySelector("#engH1").style.display = "block";
    mode = "EN";
  } else {
    p.textContent = "KR";
    langBtn.dataset.lang = "kr";
    creditsSection.querySelector("#koreanCredits").style.display = "block";
    creditsSection.querySelector("#engCredits").style.display = "none";
    photoSetsSection.querySelector("#korH1").style.display = "block";
    photoSetsSection.querySelector("#engH1").style.display = "none";
    mode = "kr";
  }
});

setTimeout(() => {
  mode = langBtn.dataset.lang;
}, 1000);

// 🖼️ Image sorting!
let folderNum = "1";
let numbOfPics = 10;
let currentImageIndex = 1;

prevButton.addEventListener("click", () => {
  currentImageIndex--;
  if (currentImageIndex < 1) {
    currentImageIndex = numbOfPics;
  }
  changeBackgroundImage();
});

nextButton.addEventListener("click", () => {
  currentImageIndex++;
  if (currentImageIndex > numbOfPics) {
    currentImageIndex = 1;
  }
  changeBackgroundImage();
});

function changeBackgroundImage() {
  cardContainer.style.backgroundImage = `url('src/images/${folderNum}/${currentImageIndex}.png')`;
}

console.log(`url('images/${folderNum}/${currentImageIndex}.png')`);

changeBackgroundImage();
