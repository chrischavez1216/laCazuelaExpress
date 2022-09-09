const mobileButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

mobileButton.addEventListener('click', () =>{
    mobileMenu.classList.toggle('inactive');
})

const listaButtonTaquiza = document.querySelector('.taquiza-button');
const listaButtonEsp = document.querySelector('.especialidades-button');
const listaTaquizas = document.querySelector('.lista-taquizas');
const listaBanquetes = document.querySelector('.lista-banquetes');
const closeButton = document.querySelector('.icon-close');
const closeButton2 = document.querySelector('.icon-close-2');

listaButtonTaquiza.addEventListener('click', () => {
    listaTaquizas.classList.toggle('inactive');
    listaBanquetes.classList.add('inactive');
});

listaButtonEsp.addEventListener('click', () => {
    listaBanquetes.classList.toggle('inactive');
    listaTaquizas.classList.add('inactive');
});

closeButton.addEventListener('click', () => {
    listaBanquetes.classList.add('inactive');
    listaTaquizas.classList.add('inactive');
});

closeButton2.addEventListener('click', () => {
    listaBanquetes.classList.add('inactive');
    listaTaquizas.classList.add('inactive');
});



