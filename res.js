let burger = document.querySelector('.burger');
let navbar = document.querySelector('.navbar');
let rightNav = document.querySelector('.rightNav');
let navlist = document.querySelector('.nav-list');

burger.addEventListener('click', () => {
    navbar.classList.toggle('h-nav-resp');
    rightNav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
});
