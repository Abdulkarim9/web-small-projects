const appContentEl = document.querySelector(".app-content");
const progressBar = document.querySelector(".progress-bar");
const remainingEl = document.querySelector(".remaining");
const questionEl = document.querySelector(".question");
const optionsEl = document.querySelectorAll(".option");
const btnStart = document.querySelector(".start");
const btnPrevious = document.querySelector(".previous");
const btnNext = document.querySelector(".next");
const resultEl = document.querySelector(".result");

// Questions Objects
const questions = [
  {
    question: "What is the largest desert in the world by area?",
    options: [
      "Sahara Desert",
      "Gobi Desert",
      "Arabian Desert",
      "Atacama Desert",
    ],
    answer: "Sahara Desert",
  },
  {
    question: "Which gas makes up the majority of Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: "Nitrogen",
  },
  {
    question: "Who was the first President of the United States?",
    options: [
      "Thomas Jefferson",
      "Benjamin Franklin",
      " John Adams",
      "George Washington",
    ],
    answer: "George Washington",
  },
  {
    question:
      'What does the acronym "IDE" stand for in the context of software development?',
    options: [
      "Integrated Development Environment",
      "Interactive Design Environment",
      "Internet Development Environment",
      "Intelligent Design Engine",
    ],
    answer: "Integrated Development Environment",
  },
  {
    question: "What is the best programing language in 2023",
    options: ["Python", "JavaScript", "C#", "Java"],
    answer: "JavaScript",
  },
];

// Global Variables
let currentQuestionIndex = 0;
let score = 0;
let correctAnswer = "";

// Functions
const startQuiz = () => {
  btnStart.classList.add("hidden");
  btnPrevious.classList.remove("hidden");
  btnNext.classList.remove("hidden");
  appContentEl.classList.remove("hidden");
  renderQuestion();
};

const renderQuestion = () => {
  const currentQuestion = questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  optionsEl.forEach((option, index) => {
    option.textContent = currentQuestion.options[index];
  });
  correctAnswer = currentQuestion.answer;
};

const updateProgressBar = () => {
  const progress = (currentQuestionIndex / questions.length) * 100;
  progressBar.style.width = `${progress}%`;
  remainingEl.textContent = `${currentQuestionIndex + 1}/${
    questions.length
  } questions`;
};

const nextQuestion = () => {
  if (currentQuestionIndex === questions.length - 1) {
    return;
  }
  currentQuestionIndex++;
  renderQuestion();
  updateProgressBar();
};

const previousQuestion = () => {
  if (currentQuestionIndex === 0) {
    return;
  }
  currentQuestionIndex--;
  renderQuestion();
  updateProgressBar();
};

const checkAnswer = (event) => {
  const selectedAnswer = event.target.textContent;
  if (selectedAnswer === correctAnswer) {
    document.body.classList.add("correct");
    score++;
  } else {
    document.body.classList.add("wrong");
  }
  setTimeout(() => {
    document.body.classList.remove("correct");
    document.body.classList.remove("wrong");
  }, 500);
  if (currentQuestionIndex === questions.length - 1) {
    showResults();
  } else {
    nextQuestion();
  }
};

const showResults = () => {
  appContentEl.classList.add("hidden");
  btnPrevious.classList.add("hidden");
  btnNext.classList.add("hidden");
  resultEl.classList.remove("hidden");
  resultEl.textContent = `Your score is ${score} out of ${questions.length}`;
};

// Event Listeners
btnStart.addEventListener("click", startQuiz);
btnNext.addEventListener("click", nextQuestion);
btnPrevious.addEventListener("click", previousQuestion);
optionsEl.forEach((option) => {
  option.addEventListener("click", checkAnswer);
});
