const cardContainer = document.getElementById("cardContainer");
const menuNav = document.getElementById("menuNav");

// --------------- //

cardContainer.addEventListener("mouseenter", function () {
  // Show the menuNav element
  menuNav.style.display = "block";
});

// Add event listener for mouseleave event on cardContainer
cardContainer.addEventListener("mouseleave", function () {
  // Hide the menuNav element
  menuNav.style.display = "none";
});