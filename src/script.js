// 🏠 DOM elements
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
const langBtn = document.getElementById("langBtn");
const prevButton = document.querySelector(".leftBtn");
const nextButton = document.querySelector(".rightBtn");

// 💡 Initializations
let chosenSet = 1;
let numOfPics = 10;
let currentImageIndex = 1;
let mode = langBtn.dataset.lang;
let currentSet = cardContainer.dataset.currentset;
let setName = "";

// 🧁 Functions
function showMenuAndPhotoControls() {
  menuNav.style.display = "flex";
  photoControls.style.display = "flex";
}

function hideMenuAndPhotoControls() {
  menuNav.style.display = "none";
  photoControls.style.display = "none";
}

function showOpenedMenu() {
  openedMenu.style.display = "flex";
  closedMenu.style.display = "none";
}

function hideOpenedMenu() {
  openedMenu.style.display = "none";
  closedMenu.style.display = "flex";
}

function saveChosenSetAndIndex() {
  localStorage.setItem("chosenSet", chosenSet);
  localStorage.setItem("currentImageIndex", currentImageIndex);
}

function getChosenSetAndIndex() {
  return {
    chosenSet: parseInt(localStorage.getItem("chosenSet")),
    currentImageIndex: parseInt(localStorage.getItem("currentImageIndex")),
  };
}

function changeBackgroundImage() {
  cardContainer.style.backgroundImage = `url('src/images/${currentSet}/${currentImageIndex}.png')`;
}

function setChosenSetAndNumOfPics(setName) {
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
}

// Event listeners
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

photoSetCloseBtn.addEventListener("click", function () {
  photoSetsSection.style.display = "none";
  menuNav.style.display = "flex";
  closedMenu.style.display = "flex";
  photoControls.style.display = "flex";
});

viewPhotoSetBtn.addEventListener("click", function () {
  openedMenu.style.display = "none";
  photoControls.style.display = "none";
  photoSetsSection.style.display = "block";
});

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

photosContainers.forEach(function (container) {
  container.addEventListener("click", function () {
    photosContainers.forEach(function (c) {
      c.classList.remove("selected");
    });
    container.classList.add("selected");

    setName = container.dataset.setname;

    saveChosenSetAndIndex();

    setChosenSetAndNumOfPics(setName);

    cardContainer.dataset.currentset = `${chosenSet}`;
    currentSet = `${chosenSet}`;
    currentImageIndex = 1;
    changeBackgroundImage();
  });
});

// document.addEventListener("contextmenu", function (event) {
//   // Prevent the default context menu from appearing
//   event.preventDefault();
// });

// 💡 Initialization v2
const storedData = getChosenSetAndIndex();

if (storedData.chosenSet && storedData.currentImageIndex) {
  chosenSet = storedData.chosenSet;
  currentSet = `${chosenSet}`;
  currentImageIndex = storedData.currentImageIndex;
  changeBackgroundImage();
  const selectedContainer = document.querySelector(
    `[data-setname="set${chosenSet}"]`
  );
  cardContainer.dataset.currentset = chosenSet;
  selectedContainer.classList.add("selected");
} else {
  // If no data is stored, set default values and select the first set
  chosenSet = 1;
  numOfPics = 10;
  currentImageIndex = 1;
  currentSet = `${chosenSet}`;
  changeBackgroundImage();
  const selectedContainer = document.querySelector("[data-setname='set1']");
  selectedContainer.classList.add("selected");
}

// 🖼️ Image Sorting
prevButton.addEventListener("click", () => {
  currentImageIndex--;
  if (currentImageIndex < 1) {
    currentImageIndex = numOfPics;
  }
  saveChosenSetAndIndex();
  changeBackgroundImage();
});

nextButton.addEventListener("click", () => {
  currentImageIndex++;
  if (currentImageIndex > numOfPics) {
    currentImageIndex = 1;
  }
  saveChosenSetAndIndex();
  changeBackgroundImage();
});

setTimeout(() => {
  mode = langBtn.dataset.lang;
  // cardContainer.dataset.currentset = `${chosenSet}`;
}, 1000);
