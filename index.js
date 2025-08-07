const carousel = document.getElementById('carousel');
const nextBtn = document.getElementById('nextBtn');
const carouselItems = document.querySelectorAll('.carousel-item');

let currentIndex = 0;
let itemWidth;

// O 'load' garante que a largura dos itens seja calculada
// somente depois que todos os elementos da página estiverem carregados.
window.addEventListener('load', () => {
    if (carouselItems.length > 0) {
        itemWidth = carouselItems[0].clientWidth;
    }
});

// A lógica do botão 'anterior' foi removida.
nextBtn.addEventListener('click', () => {
    if (currentIndex < carouselItems.length - 1) {
        currentIndex++;
        carousel.scroll({
            left: currentIndex * itemWidth,
            behavior: 'smooth'
        });
    } else {
        // Volta para a primeira foto quando chegar ao final
        currentIndex = 0;
        carousel.scroll({
            left: 0,
            behavior: 'smooth'
        });
    }
});