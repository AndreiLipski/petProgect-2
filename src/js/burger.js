
const menu = document.querySelector('.nav-menu');
const hamb = document.querySelector('.hamburger');
const night = document.querySelector('.hamb-night');
const body = document.querySelector('.body');

document.addEventListener('click', showHamb);

function showHamb(event) {
    if (event.target.closest('.hamburger')){
        menu.classList.toggle('nav-menu_active');
        hamb.classList.toggle('hamburger_active');
        night.classList.toggle('hamb-night_active');
        body.classList.toggle('body_active');
    }
    if (!event.target.closest(".hamburger")){
        hamb.classList.remove("hamburger_active");
        menu.classList.remove("nav-menu_active");
        night.classList.remove('hamb-night_active');
        body.classList.remove('body_active');
    }
}