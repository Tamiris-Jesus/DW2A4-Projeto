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



let currentIndex = 0;
let questionsCorrect = 0;

btnRestart.onclick = () => {
  content.style.display = "flex";
  contentFinish.style.display = "none";

  currentIndex = 0;
  questionsCorrect = 0;
  window.location = '../index.html';
  endQuiz();
};


function nextQuestion(e) {
  
  const selectedButton = e.target;

  if (e.target.getAttribute("data-correct") === "true") {
    selectedButton.style.backgroundColor = "limegreen";
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
  pararTemporizador();
  endTime = Date.now();
  totalTime = Math.floor((endTime - startTime) / 1000);

  textFinish.innerHTML = `você acertou ${questionsCorrect} de ${questions.length} \n em ${totalTime} segundos`;  
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

let startTime;
let endTime;
let totalTime;

// Função para iniciar o temporizador
const startTimer = (loop) => {
  startTime = Date.now();
  loop = setInterval(() => {
    const currentTime = Math.floor((Date.now() - startTime) / 1000);
    timer.innerHTML = currentTime;
  }, 1000);
 };

var pararTemporizador = (loop) => {
  clearInterval(loop);
} 

loadQuestion();
startTimer();
