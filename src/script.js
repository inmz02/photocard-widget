const cardContainer = document.getElementById("cardContainer");
const menuNav = document.getElementById("menuNav");
const openedMenu = document.getElementById("openedMenu");
const closedMenu = document.getElementById("closedMenu");
const photoControls = document.getElementById("photoControls");
const closeBtn = document.getElementById("closeBtn");
const creditsBtn = document.getElementById("creditsBtn");
const photosBtn = document.getElementById("photosBtn");
const creditsSection = document.getElementById("creditsSection");
const creditsCloseBtns = document.querySelectorAll(".creditsCloseBtn");
const langBtn = document.getElementById("langBtn");
let mode = langBtn.dataset.lang;

// --------------- //

// document.addEventListener("contextmenu", function (event) {
//   // Prevent the default context menu from appearing
//   event.preventDefault();
// });

// Hover ON
cardContainer.addEventListener("mouseenter", function () {
  if (creditsSection.style.display === "block") {
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



langBtn.addEventListener("click", function () {
  let p = langBtn.querySelector("p");

  if (mode === "kr") {
    p.textContent = "EN";
    langBtn.dataset.lang = "en";
    creditsSection.querySelector("#koreanCredits").style.display = "none";
    creditsSection.querySelector("#engCredits").style.display = "block";
    mode = "EN";
  } else {
    p.textContent = "KR";
    langBtn.dataset.lang = "kr";
    creditsSection.querySelector("#koreanCredits").style.display = "block";
    creditsSection.querySelector("#engCredits").style.display = "none";
    mode = "kr";
  }
});


setTimeout(() => {
  mode = langBtn.dataset.lang;
}, 1000);
