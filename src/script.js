const cardContainer = document.getElementById("cardContainer");
const menuNav = document.getElementById("menuNav");
const openedMenu = document.getElementById("openedMenu");
const closedMenu = document.getElementById("closedMenu");
const photoControls = document.getElementById("photoControls");
const closeBtn = document.getElementById("closeBtn");
const viewPhotoSetBtn = document.getElementById("photosBtn");

const creditsBtn = document.getElementById("creditsBtn");
const creditsSection = document.getElementById("creditsSection");
const creditsCloseBtns = document.querySelectorAll(".creditsCloseBtn");

const photoSetsSection = document.getElementById("photoSetsSection");
const photosContainers = photoSetsSection.querySelectorAll(
  ".bottomSec .outer_wrapper"
);
const photoSetCloseBtn = document.getElementById("photoSetCloseBtn");
let chosenSet = 0;
let numOfPics = 0;

const langBtn = document.getElementById("langBtn");
let mode = langBtn.dataset.lang;
let currentSet = cardContainer.dataset.currentset;
const prevButton = document.querySelector(".leftBtn");
const nextButton = document.querySelector(".rightBtn");

// --------------- //

// document.addEventListener("contextmenu", function (event) {
//   // Prevent the default context menu from appearing
//   event.preventDefault();
// });

// Function to show menu and photo controls
function showMenuAndPhotoControls() {
  menuNav.style.display = "flex";
  photoControls.style.display = "flex";
}

// Function to hide menu and photo controls
function hideMenuAndPhotoControls() {
  menuNav.style.display = "none";
  photoControls.style.display = "none";
}

// Function to show opened menu and hide closed menu
function showOpenedMenu() {
  openedMenu.style.display = "flex";
  closedMenu.style.display = "none";
}

// Function to hide opened menu and show closed menu
function hideOpenedMenu() {
  openedMenu.style.display = "none";
  closedMenu.style.display = "flex";
}

// Hover ON
cardContainer.addEventListener("mouseenter", function () {
  if (
    creditsSection.style.display === "block" ||
    photoSetsSection.style.display === "block"
  ) {
    hideMenuAndPhotoControls();
  } else {
    showMenuAndPhotoControls();
  }
  hideOpenedMenu();
});

//  Hover OFF
cardContainer.addEventListener("mouseleave", function () {
  hideMenuAndPhotoControls();
});

closedMenu.addEventListener("click", function () {
  showOpenedMenu();
});

closeBtn.addEventListener("click", function () {
  hideOpenedMenu();
});

creditsBtn.addEventListener("click", function () {
  hideOpenedMenu();
  hideMenuAndPhotoControls();
  creditsSection.style.display = "block";
});

creditsCloseBtns.forEach(function (x) {
  x.addEventListener("click", function () {
    creditsSection.style.display = "none";
    showMenuAndPhotoControls();
    showOpenedMenu();
  });
});

// -------------------------------- //
// >> Choosing a photocard set 💡
photosContainers.forEach(function (container) {
  container.classList.remove("selected");
  container.addEventListener("click", function () {
    photosContainers.forEach(function (c) {
      c.classList.remove("selected");
    });
    container.classList.add("selected");

    let setName = container.dataset.setname;

    switch (setName) {
      case "set1":
        chosenSet = 1;
        numOfPics = 10;
        break;
      case "set2":
        chosenSet = 2;
        numOfPics = 5;
        break;
      case "set3":
        chosenSet = 3;
        numOfPics = 5;
        break;
      case "set4":
        chosenSet = 4;
        numOfPics = 10;
        break;
      case "set5":
        chosenSet = 5;
        numOfPics = 5;
        break;
      case "set6":
        chosenSet = 6;
        numOfPics = 5;
        break;
    }

    cardContainer.dataset.currentSet = `${chosenSet}`;

    console.log(cardContainer.dataset.currentSet);

  });
});

photoSetCloseBtn.addEventListener("click", function () {
  photoSetsSection.style.display = "none";
  menuNav.style.display = "flex";
  closedMenu.style.display = "flex";
  photoControls.style.display = "flex";
});

// Clicking to open the Photocard sets modal 🐼
viewPhotoSetBtn.addEventListener("click", function () {
  openedMenu.style.display = "none";
  photoControls.style.display = "none";
  photoSetsSection.style.display = "block";
});

// -------------------------------- //

// >> Choosing the language 🧁
langBtn.addEventListener("click", function () {
  let p = langBtn.querySelector("p");
  let koreanCredits = creditsSection.querySelector("#koreanCredits");
  let engCredits = creditsSection.querySelector("#engCredits");
  let korH1 = photoSetsSection.querySelector("#korH1");
  let engH1 = photoSetsSection.querySelector("#engH1");

  mode = mode === "kr" ? "EN" : "kr";
  p.textContent = mode === "kr" ? "KR" : "EN";
  langBtn.dataset.lang = mode;

  koreanCredits.style.display = mode === "kr" ? "block" : "none";
  engCredits.style.display = mode === "kr" ? "none" : "block";
  korH1.style.display = mode === "kr" ? "block" : "none";
  engH1.style.display = mode === "kr" ? "none" : "block";
});

// -------------------------------- //

setTimeout(() => {
  mode = langBtn.dataset.lang;
  currentSet = cardContainer.dataset.currentset;
}, 1000);

// -------------------------------- //

// >> Image Sorting 🖼️
let currentImageIndex = 1;

prevButton.addEventListener("click", () => {
  currentImageIndex--;
  if (currentImageIndex < 1) {
    currentImageIndex = numOfPics;
  }
  changeBackgroundImage();
});

nextButton.addEventListener("click", () => {
  currentImageIndex++;
  if (currentImageIndex > numOfPics) {
    currentImageIndex = 1;
  }
  changeBackgroundImage();
});

function changeBackgroundImage() {
  cardContainer.style.backgroundImage = `url('src/images/${currentSet}/${currentImageIndex}.png')`;
}

console.log(`url('images/${currentSet}/${currentImageIndex}.png')`);

changeBackgroundImage();

// -------------------------------- //
