// Uso de módulos - Importando funções de outros módulos

import { createElement } from './utils.js';
import { checkEndGame } from './game.js'

let firstCard = '';
let secondCard = '';

// Array com o nome dos personagens (que são os mesmos nomes das imagens)
export const characters = [
  'ada',
  'alanTuring',
  'bjarne',
  'dennis',
  'graceHopper',
  'james',
  'linus',
  'margaret',
  'tim',
  'john',
];


// Função para criar uma carta com base no nome do personagem
export const createCard = (character) => {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');
  
    front.style.backgroundImage = `url('../imagensFacil/${character}.jpg')`;
  
    card.appendChild(front);
    card.append(back);
  
    card.addEventListener('click', revealCard);
    card.setAttribute('data-character', character);
  
    return card;
  };


  // Função para revelar uma carta
export const revealCard = ({ target }) => {
    if (target.parentNode.className.includes('reveal-card')) {
      return;
    }
  
    if (firstCard === '') {
      target.parentNode.classList.add('reveal-card');
      firstCard = target.parentNode;
    } else if (secondCard === '') {
      target.parentNode.classList.add('reveal-card');
      secondCard = target.parentNode;
      checkCards();
    }
  };

  // Função para verificar se as cartas selecionadas são iguais
export const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');
  
    if (firstCharacter == secondCharacter) {
      firstCard.firstChild.classList.add('disabled-card');
      secondCard.firstChild.classList.add('disabled-card');
      firstCard = '';
      secondCard = '';
      checkEndGame();
    } else {
      setTimeout(() => {
        firstCard.classList.remove('reveal-card');
        secondCard.classList.remove('reveal-card');
        firstCard = '';
        secondCard = '';
      }, 500);
    }
  };
