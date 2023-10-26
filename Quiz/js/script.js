import questions from "./questions.js";

const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");
const timer = document.querySelector('.timer');
export let players = []; // Lista de jogadores

import { showRanking } from "../../JogoDaMemoria/js/ranking.js";

let currentIndex = 0;
let questionsCorrect = 0;

btnRestart.onclick = () => {
  content.style.display = "flex";
  contentFinish.style.display = "none";

  currentIndex = 0;
  questionsCorrect = 0;
  //window.location = '../index.html';
  endQuiz();
};


function nextQuestion(e) {
  
  const selectedButton = e.target;

  if (e.target.getAttribute("data-correct") === "true") {
    selectedButton.style.backgroundColor = "green";
    questionsCorrect++;
  } else{
    selectedButton.style.backgroundColor = "red";
  }

  if (currentIndex < questions.length - 1) {
    currentIndex++;
    
    setTimeout(() => {
      loadQuestion();
    }, 1000); 
  } else {
    finish();
  }
}

function finish() {
  textFinish.innerHTML = `você acertou ${questionsCorrect} de ${questions.length}`;
  content.style.display = "none";
  contentFinish.style.display = "flex";
}

function loadQuestion() {
  spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
  const item = questions[currentIndex];
  answers.innerHTML = "";
  question.innerHTML = item.question;

  item.answers.forEach((answer) => {
    const div = document.createElement("div");

    div.innerHTML = `
    <button class="answer" data-correct="${answer.correct}">
      ${answer.option}
    </button>
    `;

    answers.appendChild(div);
  });

  document.querySelectorAll(".answer").forEach((item) => {
    item.addEventListener("click", nextQuestion);
  });
}

// Função para iniciar o temporizador
const startTimer = (loop) => {
  loop = setInterval(() => {
     const currentTime = +timer.innerHTML;
     timer.innerHTML = currentTime + 1;
   }, 1000);
 };

function endQuiz (){
  const ranking = document.querySelector("./ranking");
  ranking = ranking.className.style.display = "flex"; 
  showRanking();
}


loadQuestion();
startTimer();
