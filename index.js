//Definir constantes
const desplegable = document.querySelector('.sub-menu')
const subDos = document.querySelector('.sub-menu.dos')


//escuchar clicks
document.querySelector('.desplegable').addEventListener('click', () => {
    document.querySelector('.sub-menu').classList.toggle('show');
    document.querySelector('.arrow').classList.toggle('deg')
    subDos.classList.remove('show')
    document.querySelector('.two').classList.remove('deg')
})
document.querySelector('.sub-dos').addEventListener('click', () => {
    document.querySelector('.sub-menu.dos').classList.toggle('show');
    desplegable.classList.remove('show')
    document.querySelector('.arrow').classList.remove('deg')
    document.querySelector('.two').classList.toggle('deg')
})

document.querySelector('.menu').addEventListener('click', () => {
    document.querySelector('.nav-mobile').classList.toggle('show')
})
document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.nav-mobile').classList.remove('show')
})

document.querySelector('.features').addEventListener('click', () => {
    document.querySelector('.features-sub').classList.toggle('show')
    document.querySelector('.company-sub').classList.remove('show')
    document.querySelector('.icarr').classList.toggle('deg')
    document.querySelector('.icarrtwo').classList.remove('deg')
})
document.querySelector('.company').addEventListener('click', () => {
    document.querySelector('.company-sub').classList.toggle('show')
    document.querySelector('.features-sub').classList.remove('show')
    document.querySelector('.icarrtwo').classList.toggle('deg')
    document.querySelector('.icarr').classList.remove('deg')
})