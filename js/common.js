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


/**** Automatically collapse expanded menu when menu link selected ****/
// https://stackoverflow.com/questions/42401606/how-to-hide-collapsible-bootstrap-navbar-on-click
// Corrected solution from conradfr to include dropdown links

const navLinks = document.querySelectorAll('.nav-item:not(.dropdown), .dropdown-item'); 
const menuToggle = document.getElementById('mainMenu'); 
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false}); 
navLinks.forEach( function(navLink) { 
  navLink.addEventListener('click', function() {
    if (menuToggle.classList.contains('show')) { 
      bsCollapse.toggle(); 
    } 
  }); 
}); 
