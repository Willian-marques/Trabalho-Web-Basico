// Variável que armazena o índice do slide atual (inicia em 0, ou seja, o primeiro slide).
let currentSlide = 0;

// Define o número total de slides no carrossel (no caso, 3 slides).
const totalSlides = 3;

// Seleciona o elemento com a classe 'carousel' que contém os slides.
const carousel = document.querySelector('.carousel');

// Função que move o carrossel em uma direção especificada (1 para avançar, -1 para retroceder).
function moveSlide(direction) {
    // Atualiza o índice do slide atual. O cálculo usa módulo (%), garantindo que o valor de currentSlide
    // sempre fique dentro do intervalo de 0 a totalSlides - 1 (evita ultrapassar os limites dos slides).
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    // Chama a função que atualiza a posição do carrossel com base no novo índice do slide.
    updateCarousel();
}

// Função que atualiza a posição do carrossel, movendo-o horizontalmente.
function updateCarousel() {
    // Obtém a largura de um item do carrossel (assume-se que todos os itens têm a mesma largura).
    const itemWidth = document.querySelector('.item').clientWidth;

    // Aplica a transformação CSS para mover o carrossel para a posição correta. O valor de 'translateX'
    // é negativo, o que move o carrossel para a esquerda. A quantidade de movimento depende do slide atual.
    carousel.style.transform = `translateX(-${currentSlide * itemWidth}px)`;
}

// Cria um intervalo que executa a função moveSlide(1) a cada 1500 milissegundos (1,5 segundos).
// Isso fará o carrossel avançar automaticamente a cada 1,5 segundos.
setInterval(() => moveSlide(1), 1500);

// O código se repete a partir daqui, como se fosse uma duplicação. O comportamento será o mesmo,
// portanto, parece ser um erro ou redundância no código.
