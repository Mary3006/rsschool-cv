
function myFunction(x) {
    x.classList.toggle("change");
}

const menu = document.querySelector('.header__menu')

const burger = document.querySelector('.header__burger')

burger.addEventListener('click', () => {
    menu.classList.toggle('visible')
})

const anchors = document.querySelectorAll('.smooth-scroll')
const main = document.querySelector('.main')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href')

        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })


    })
}