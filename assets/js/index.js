let navButton = document.getElementById('nav-button')
let sideMenu = document.querySelector('.sideMenu')
let closeBtn = document.getElementById('closeSideMenu')
let overLay = document.getElementById('overLay')

navButton.addEventListener('click', () => {
    sideMenu.classList.add('show')
    overLay.classList.add('show')
})
closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('show')
    overLay.classList.remove('show')
})