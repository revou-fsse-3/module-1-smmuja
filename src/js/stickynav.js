// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var nav-top = document.getElementById("nav-top");

// Get the offset position of the navbar
var sticky = nav-top.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
if (window.pageYOffset >= sticky) {
    nav-top.classList.add("sticky")
} else {
nav-top.classList.remove("sticky");
}
}