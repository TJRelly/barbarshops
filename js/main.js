const nav = document.querySelector('nav')
const showNav = document.querySelector('show-nav')
const logo = document.querySelector('.logo')
const social = document.querySelector('.social')
const burger = document.querySelector('.hamburger-menu')
const navLeft = document.querySelector('.navbar-left')

const menuBtn = Array.from(document.querySelectorAll(".menu-btn"));
const navUl = document.querySelector(".nav ul")

for (btn in menuBtn) {
    menuBtn[btn].onclick = toggleMenu;
}

function toggleMenu() {
    nav.classList.toggle("show-nav")
    navLeft.classList.toggle("overlay")
}

let media800 = window.matchMedia("(max-width: 800px)")
myFunction(media800) // Call listener function at run time
media800.addListener(myFunction) // Attach listener function on state changes

function myFunction(media800) {
    if (media800.matches) { // If media query matches
        window.onscroll = scrollSmall
    } else {
        window.onscroll = scrollBig
    }
}

function scrollBig() {
    if (document.documentElement.scrollTop > 50) {
        nav.style.backgroundColor = 'black'
        nav.style.justifyContent = 'center'
        nav.style.padding = '1rem'
        logo.style.display = 'none'
        social.style.display = 'none'
    } else {
        nav.style.backgroundColor = ''
        nav.style.padding = ''
        nav.style.justifyContent = ''
        logo.style.display = ''
        social.style.display = ''
    }
}

function scrollSmall() {
    if (document.documentElement.scrollTop > 50) {
        nav.style.backgroundColor = 'black'
        nav.style.padding = '1rem 2rem'
        showNav.style.backgroundColor = 'black'
        showNav.style.justifyContent = 'end'
        logo.style.display = 'none'
        social.style.display = 'none'
    } else {
        nav.style.backgroundColor = ''
        showNav.style.backgroundColor = ''
        showNav.style.padding = ''
        showNav.style.justifyContent = ''
        logo.style.display = ''
        social.style.display = ''
    }
}
