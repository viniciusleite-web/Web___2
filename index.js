const botaoMenu = document.querySelector(".cabecalho__menu");
const menu = document.querySelector(".menu-lateral");

const Xclose = document.querySelector(".material-symbols-outlined")

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')
});

Xclose.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')
});



