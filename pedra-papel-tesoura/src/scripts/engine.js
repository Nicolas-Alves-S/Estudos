async function checkDuelResult(playerCard, computerCard) {
  let duelResult = "empate";
  if (playerCard.venceDe.includes(computerCard.id)) {
    duelResult = "vitória";
    state.score.playerScore++;
  }
  if (playerCard.perdeDe.includes(computerCard.id)) {
    duelResult = "derrota";
    state.score.computerScore++;
  }
  await playAudio(duelResult);
  return duelResult;
}const audioPlayer = document.getElementById("audio-player");

// Adiciona um evento de clique ao botão de áudio
audioPlayer.addEventListener("click", () => {
  var bgm = document.getElementById("bgm");
  state.audio.backgroundAudio = !state.audio.backgroundAudio;

  if (state.audio.backgroundAudio) {
    audioPlayer.classList.add("active");
    audioPlayer.classList.remove("inactive");
    bgm.play(); // Toca o áudio de fundo
  } else {
    audioPlayer.classList.add("inactive");
    audioPlayer.classList.remove("active");
    bgm.pause(); // Pausa o áudio de fundo
  }
});

// Estado global do jogo
const state = {
  audio: {
    backgroundAudio: false, // Controle do áudio de fundo
  },
  score: {
    playerScore: 0,
    computerScore: 0,
    scoreBox: document.getElementById("score_points"), // Elemento que exibe a pontuação
  },
  cardSprites: {
    avatar: document.getElementById("card-image"),
    name: document.getElementById("card-name"),
    type: document.getElementById("card-type"),
  },
  playerSides: {
    player1: "player-cards",
    player1Box: document.querySelector("#player-cards"),
    player2: "computer-cards",
    player2Box: document.querySelector("#computer-cards"),
  },
  fieldCards: {
    player: document.getElementById("player-field-card"),
    computer: document.getElementById("computer-field-card"),
  },
  actions: {
    button: document.getElementById("next-duel"),
  },
};

const pathImages = "./src/assets/icons/"; // Caminho das imagens das cartas

// Dados das cartas do jogo
const cardData = [
  {
    id: 0,
    name: "Pedra",
    type: "Rocha",
    img: `${pathImages}magician2.png`,
    venceDe: [2], // Pedra ganha de Tesoura
    perdeDe: [1], // Pedra perde para Papel
  },
  {
    id: 1,
    name: "Papel",
    type: "Papel",
    img: `${pathImages}dragon2.png`,
    venceDe: [0], // Papel ganha de Pedra
    perdeDe: [2], // Papel perde para Tesoura
  },
  {
    id: 2,
    name: "Tesoura",
    type: "Tesoura",
    img: `${pathImages}exodia2.png`,
    venceDe: [1], // Tesoura ganha de Papel
    perdeDe: [0], // Tesoura perde para Pedra
  }
];

// Inicializa o jogo
function init() {
  state.fieldCards.player.style.display = "none";
  state.fieldCards.computer.style.display = "none";
  state.actions.button.style.display = "none"; // Oculta o botão de próximo duelo
  drawCards(3, state.playerSides.player1); // Desenha cartas para o jogador
  drawCards(3, state.playerSides.player2); // Desenha cartas para o computador
}

// Sorteia e desenha cartas no campo
async function drawCards(cardsNumber, fieldSide) {
  for (let i = 0; i < cardsNumber; i++) {
    const randomCard = await getRandomCard();
    const cardImage = await createCardImage(randomCard, fieldSide);
    document.getElementById(fieldSide).appendChild(cardImage);
  }
}

// Cria a imagem da carta
async function createCardImage(card, fieldSide) {
  const cardImage = document.createElement("img");
  cardImage.setAttribute("height", "100px");
  cardImage.setAttribute("src", "./src/assets/icons/card-back.png");
  cardImage.setAttribute("data-id", card.id);
  cardImage.classList.add("card");

  if (fieldSide === state.playerSides.player1) {
    cardImage.addEventListener("click", async () => {
      await setCardsField(cardImage.getAttribute("data-id"));
    });

    cardImage.addEventListener("mouseover", async () => {
      await drawSelectedCard(card.id);
    });
  }

  return cardImage;
}

// Define as cartas no campo de batalha
async function setCardsField(cardId) {
  await removeAllCardsImages();
  const computerCard = await getRandomCard();
  const playerCard = cardData[cardId];

  state.fieldCards.player.style.display = "block";
  state.fieldCards.computer.style.display = "block";

  state.fieldCards.player.src = playerCard.img;
  state.fieldCards.computer.src = computerCard.img;

  const duelResult = await checkDuelResult(playerCard, computerCard);
  await updateScore();
  await drawButton(duelResult);
}

// Atualiza o placar
async function updateScore() {
  state.score.scoreBox.innerText = `Vitórias: ${state.score.playerScore} | Derrotas: ${state.score.computerScore}`;
}

// Cria um botão com o resultado do duelo e reinicia o jogo ao ser clicado
async function drawButton(result) {
  state.actions.button.innerText = result.toUpperCase();
  state.actions.button.style.display = "block";
  state.actions.button.onclick = resetDuel;
}

// Verifica o resultado do duelo
async function checkDuelResult(playerCard, computerCard) {
  let duelResult = "empate";
  if (playerCard.venceDe.includes(computerCard.id)) {
    duelResult = "vitória";
    state.score.playerScore++;
  }
  if (playerCard.perdeDe.includes(computerCard.id)) {
    duelResult = "derrota";
    state.score.computerScore++;
  }
  await playAudio(duelResult);
  return duelResult;
}

// Remove todas as imagens das cartas
async function removeAllCardsImages() {
  let { player1Box, player2Box } = state.playerSides;
  player1Box.querySelectorAll("img").forEach((img) => img.remove());
  player2Box.querySelectorAll("img").forEach((img) => img.remove());
}

// Exibe a carta selecionada
async function drawSelectedCard(cardId) {
  const selectedCard = cardData[cardId];
  state.cardSprites.avatar.src = selectedCard.img;
  state.cardSprites.name.innerText = selectedCard.name;
  state.cardSprites.type.innerText = `Atributo: ${selectedCard.type}`;
}

// Sorteia uma carta aleatória
async function getRandomCard() {
  const randomIndex = Math.floor(Math.random() * cardData.length);
  return cardData[randomIndex];
}

// Toca um som com base no resultado do duelo
async function playAudio(status) {
  const audio = new Audio(`./src/assets/audios/${status}.wav`);
  audio.play();
}

// Reinicia o jogo para um novo duelo
function resetDuel() {
  init();
}

// Inicializa o jogo
init();
