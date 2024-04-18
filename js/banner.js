const carrossel = document.querySelector('.carrossel_banner');
const slides = document.querySelectorAll('.slide_banner');
const botaoAnterior = document.querySelector('.botao-anterior');
const botaoProximo = document.querySelector('.botao-proximo');

let index = 0;

function mostrarSlide(n) {
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    slides[n].style.display = 'block';
}

function slideAnterior() {
    index = (index === 0) ? slides.length - 1 : index - 1;
    mostrarSlide(index);
}

function slideProximo() {
    index = (index === slides.length - 1) ? 0 : index + 1;
    mostrarSlide(index);
}

botaoAnterior.addEventListener('click', slideAnterior);
botaoProximo.addEventListener('click', slideProximo);

mostrarSlide(index);

setInterval(slideProximo, 5000);
