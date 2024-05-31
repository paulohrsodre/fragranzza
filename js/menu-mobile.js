document.addEventListener('DOMContentLoaded', () => {
    const botaoMenu = document.querySelector('.menu-icon');
    const menuMobile = document.querySelector('.menu_mobile');

    botaoMenu.addEventListener('click', () => {
        menuMobile.classList.toggle('open');
    });
})