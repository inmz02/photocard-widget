const cardContainer = document.getElementById("cardContainer");
const menuNav = document.getElementById("menuNav");
const openedMenu = document.getElementById("openedMenu");
const closedMenu = document.getElementById("closedMenu");
const photoControls = document.getElementById("photoControls");
const closeBtn = document.getElementById("closeBtn");
const creditsBtn = document.getElementById("creditsBtn");
const photosBtn = document.getElementById("photosBtn");
const creditsSection = document.getElementById("creditsSection");
const creditsCloseBtn = document.getElementById("creditsCloseBtn");

// --------------- //

// Hover ON
cardContainer.addEventListener("mouseenter", function () {
  if (creditsSection.style.display === "block") {
    menuNav.style.display = "none";
    photoControls.style.display = "none";
  } else {
    menuNav.style.display = "flex";
    photoControls.style.display = "flex";
  }
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

creditsCloseBtn.addEventListener("click", function () {
  creditsSection.style.display = "none";
  menuNav.style.display = "flex";
  closedMenu.style.display = "flex";
  photoControls.style.display = "flex";
});
