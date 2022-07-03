// Common scripts


/**** Scroll to top functionality ****/

// define the scroll function
window.onscroll = function() {
  scrollFunction();
};

// get the scroll button
let scrollToTopButton = document.getElementById("btn-back-to-top");

// only show the button when the user has scrolled a set distance from the top
function scrollFunction() {
  const SCROLL_TRIGGER_DISTANCE = 20; // pixels
  if (
    document.body.scrollTop > SCROLL_TRIGGER_DISTANCE ||
    document.documentElement.scrollTop > SCROLL_TRIGGER_DISTANCE
  ) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
}

// listen for clicks and respond by scrolling to the top
scrollToTopButton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
