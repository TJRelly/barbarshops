let nav = document.querySelector('nav')
let logo = document.querySelector('.logo')
let social = document.querySelector('.social')




window.onscroll = function () {
    if (document.documentElement.scrollTop > 50) {
        nav.style.backgroundColor = 'black'
        nav.style.padding = '1rem'
        nav.style.justifyContent = 'center'
        logo.style.display = 'none'
        social.style.display = 'none'
    } else {
        nav.style.backgroundColor = 'transparent'
        nav.style.padding = ''
        nav.style.justifyContent = ''
        logo.style.display = ''
        social.style.display = ''
    }
}
