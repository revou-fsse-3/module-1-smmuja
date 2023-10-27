const menuToggle = document.querySelector('.hamburger input');
const nav = document.querySelector('.nav-bar');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');

});