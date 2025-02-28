// Função chamada quando o mouse entra em um elemento com evento associado
function handleMouseEnter() { 
    this.classList.add('card--hovered');  // Adiciona a classe 'card--hovered' ao elemento que acionou o evento
    document.body.id = `${this.id}--hovered`;// Define o ID do <body> como o ID do elemento que acionou o evento, acrescido de '--hovered'
}

// Função chamada quando o mouse sai de um elemento com evento associado,Essa funçao seria pra pra adicionar o desfoque dos outros cards
function handleMouseLeave() {
    this.classList.remove('card--hovered'); // Remove a classe 'card--hovered' do elemento que acionou o evento
    document.body.id = '';    // Remove o ID do <body> (volta ao estado padrão)
}

// Adiciona os event listeners aos elementos com a classe 'card'
function addEventListenersToCards() {
    const cardElements = document.getElementsByClassName('card');  // Obtém todos os elementos que possuem a classe 'card'

    // Itera sobre a coleção de elementos e adiciona os eventos de mouse
    for (let index = 0; index < cardElements.length; index++) {
        const card = cardElements[index];
        card.addEventListener('mouseenter', handleMouseEnter);// Adiciona o evento de mouse entrar
        card.addEventListener('mouseleave', handleMouseLeave);// Adiciona o evento de mouse sair
    }
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);// Aguarda o carregamento completo do DOM 
// para executar a função addEventListenersToCards

// Função que controla a rotação do carrossel com base no botão selecionado
function selectedCarouselItem(selectedButtonElement) {
    const selectedItem = selectedButtonElement.id;    // Obtém o ID do botão selecionado
    const carousel = document.querySelector('.cards-carousel');// Seleciona o carrossel de cartões
    const transform = carousel.style.transform;   // Obtém o valor atual da transformação CSS do carrossel
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);    // Extrai o ângulo atual de rotação Y usando regex (caso já exista uma rotação aplicada)
    const rotateYDeg = -120 * (Number(selectedItem) - 1);    // Calcula o novo ângulo de rotação com base no ID do botão (multiplicando por -120 graus)
    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`); // Substitui a rotação Y antiga pelo novo valor calculado
    carousel.style.transform = newTransform;// Aplica a nova transformação ao carrossel
    const activeButtonElement = document.querySelector('.controller__button--active');    // Obtém o botão que estava ativo anteriormente
    activeButtonElement.classList.remove('controller__button--active');    // Remove a classe de ativo do botão anterior
    selectedItem.classList.add('controller__button--active');    // Adiciona a classe de ativo ao botão recém-selecionado
}
