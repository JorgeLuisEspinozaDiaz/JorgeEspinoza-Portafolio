
const btnOpen = document.querySelector('.btn__open')
const btnClose = document.querySelector('.btn__close')
const menu = document.querySelector('.navbar__menu')

btnOpen.onclick = function () {
    menu.classList.add('show--menu')
}
btnClose.onclick = function () {
    menu.classList.remove('show--menu')
}
