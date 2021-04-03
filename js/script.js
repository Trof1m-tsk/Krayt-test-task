const menuBtn = document.querySelector('.header__menu_btn');
const menu = document.querySelector('.header__menu');

console.log(menuBtn);

menuBtn.addEventListener('click', function() {
    console.log('clicked');
    menu.classList.toggle('header__menu--opened');
});