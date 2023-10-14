// Uso de módulos - Importando funções de outros módulos
// Uso de módulos - Exportando funções

import { showRanking } from './ranking.js';
import { createCard, characters } from './card.js';


// // Seleção de elementos HTML pela classe
const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

export let players = []; // Lista de jogadores

let loop; // Variável para armazenar o intervalo do temporizador

  // Função para verificar se o jogo foi concluído
export const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');
    if (disabledCards.length === 20) {
      clearInterval(loop); // Limpa o intervalo do temporizador
      alert(`Parabéns, ${spanPlayer.innerHTML}! Você zerou o jogo. Seu tempo foi: ${timer.innerHTML} segundos`);
      endGameMenu();
      localStorage.setItem('playerTime', timer.innerHTML);
      localStorage.setItem('playerName', spanPlayer.innerHTML);
    }
  };

  // Função para exibir o menu de fim de jogo
const endGameMenu = () => {
    const container = document.querySelector('.container');
    container.style.display = 'flex'; // Exibe o container do jogo
  
    const restartBtn = document.querySelector('.restart-btn');
    const homeBtn = document.querySelector('.home-btn');
  
    restartBtn.addEventListener('click', () => {
      restartGame();
    });
    homeBtn.addEventListener('click', () => {
      goToHomePage();
    });
  
    const playerName = spanPlayer.innerHTML;
    const playerTime = timer.innerHTML;
    players.push({ name: playerName, time: playerTime });
    localStorage.setItem('players', JSON.stringify(players));
    showRanking();
  };

// Função para reiniciar o jogo
const restartGame = () => {
  const container = document.querySelector('.container');
  container.style.display = 'none'; // Esconde o container do jogo
  clearInterval(loop); // Limpa o intervalo do temporizador
  timer.innerHTML = '00'; // Reinicia o valor do temporizador para "00"
  grid.innerHTML = ''; // Limpa o conteúdo do grid
  loadGame(); // Carrega um novo jogo
  startTimer(); // Inicia o temporizador novamente
};

// Função para voltar para a página inicial
const goToHomePage = () => {
  clearInterval(loop); // Limpa o intervalo do temporizador
  window.location.href = '../index.html'; // Redireciona o navegador para a página inicial
};

// Função para carregar o jogo (criar as cartas)
const loadGame = () => {
  const duplicateCharacters = [...characters, ...characters];

  const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

  shuffledArray.forEach((character) => {
    const card = createCard(character);
    grid.appendChild(card);
  });
};

// Função para iniciar o temporizador
const startTimer = (loop) => {
 loop = setInterval(() => {
    const currentTime = +timer.innerHTML;
    timer.innerHTML = currentTime + 1;
  }, 1000);
};

// Função que é executada quando a página é carregada
window.onload = () => {
  const container = document.querySelector('.container');
  container.style.display = 'none';
  const storedPlayers = JSON.parse(localStorage.getItem('players'));
  if (storedPlayers) {
    players = storedPlayers;
  }
  spanPlayer.innerHTML = localStorage.getItem('player');
  startTimer(loop);
  loadGame();
};
