const pianoteclas = document.querySelectorAll(".piano-teclas .tecla");
const volumeSlider = document.querySelector(".volume-slider input");
const teclasCheck = document.querySelector(".teclas-check input");

// Lista onde serão armazenadas as teclas mapeadas do piano
let mapedteclas = [];

// Função para tocar o som de uma tecla
const playTune = (tecla) => {
    let audio = new Audio(`assets/sons/${tecla}.wav`);// Cria um novo objeto de áudio para evitar sobreposição de sons
    audio.volume = volumeSlider.value;
    audio.play();

    // Adiciona a classe 'active' para animar a tecla pressionada
    const clickedtecla = document.querySelector(`[data-tecla="${tecla}"]`);
    if (clickedtecla) {
        clickedtecla.classList.add("active");
        setTimeout(() => clickedtecla.classList.remove("active"), 150);        // Remove a classe 'active' após 150ms
    }
};

// Percorre todas as teclas do piano e adiciona um evento de clique
pianoteclas.forEach((tecla) => {
    tecla.addEventListener("click", () => playTune(tecla.dataset.tecla));
    mapedteclas.push(tecla.dataset.tecla);    // Armazena as teclas disponíveis no piano

});

// Adiciona evento para tocar a nota ao pressionar uma tecla do teclado
document.addEventListener("keydown", (e) => {
    if (mapedteclas.includes(e.key)) {    // Se a tecla pressionada estiver no piano, toca o som
        playTune(e.key);
    }
});

const handleVolume = (e) => {
    volumeSlider.value = e.target.value;
};// Função para ajustar o volume do áudio

const showHideteclas = () => {
    pianoteclas.forEach((tecla) => tecla.classList.toggle("hide"));
};
volumeSlider.addEventListener("input", handleVolume);// Adiciona evento para ajustar o volume quando o usuário mexe no controle deslizante
teclasCheck.addEventListener("click", showHideteclas);// Adiciona evento para esconder/mostrar as teclas quando o checkbox é marcado/desmarcado