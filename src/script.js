const cardContainer = document.getElementById("cardContainer");
const menuNav = document.getElementById("menuNav");
const openedMenu = document.getElementById("openedMenu");
const closedMenu = document.getElementById("closedMenu");
const photoControls = document.getElementById("photoControls");
const closeBtn = document.getElementById("closeBtn");
const creditsBtn = document.getElementById("creditsBtn");
const photosBtn = document.getElementById("photosBtn");
const creditsSection = document.getElementById("creditsSection");

// --------------- //

// cardContainer.addEventListener("mouseenter", function () {
//   // Show the menuNav element
//   menuNav.style.display = "flex";
//   photoControls.style.display = "flex";
// });

// // Add event listener for mouseleave event on cardContainer
// cardContainer.addEventListener("mouseleave", function () {
//   // Hide the menuNav element
//   menuNav.style.display = "none";
//   photoControls.style.display = "none";
// });

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
