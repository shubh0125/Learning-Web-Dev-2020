const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const optionA = document.getElementById("optionA");
const optionB = document.getElementById("optionB");
const optionC = document.getElementById("optionC");
const optionD = document.getElementById("optionD");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const score = document.getElementById("score");

let questionsList = [
    {
        question : "What is my name?",
        optionA : "Correct",
        optionB : "Wrong",
        optionC : "Wrong",
        optionD : "Wrong",
        correct : "A"
    },
    {
        question : "What is my name?",
        optionA : "Correct",
        optionB : "Wrong",
        optionC : "Wrong",
        optionD : "Wrong",
        correct : "A"
    },
    {
        question : "What is my name?",
        optionA : "Correct",
        optionB : "Wrong",
        optionC : "Wrong",
        optionD : "Wrong",
        correct : "A"
    },
    {
        question : "What is my name?",
        optionA : "Correct",
        optionB : "Wrong",
        optionC : "Wrong",
        optionD : "Wrong",
        correct : "A"
    },
    {
        question : "What is my name?",
        optionA : "Correct",
        optionB : "Wrong",
        optionC : "Wrong",
        optionD : "Wrong",
        correct : "A"
    }
];

const lastQuestionIndex = questionsList.length - 1;
let runningQuestionIndex = 0;

let count = 0;
let questionTime = 60;
const gaugeWidth = 150;
const gaugeUnit = gaugeWidth / questionTime;

function renderQuestion() {
let q = questionsList[runningQuestionIndex];
question.innerHTML = "<p>" + q.question + "</p>";
optionA.innerHTML = q.optionA;
optionB.innerHTML = q.optionB;
optionC.innerHTML = q.optionC;
optionD.innerHTML = q.optionD;
}

function renderProgress() {
    for(let qIndex = 0; qIndex <= lastQuestionIndex; qIndex++) {
        progress.innerHTML += "<div class = 'prog' id = " + qIndex + "></div>";
    }
}

start.style.display = "none";
renderQuestion();
quiz.style.display = "block";
renderProgress();
renderCounter();

function renderCounter() {
    if(count <= questionTime) {
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit;
        count += 1;
    }
    else {
        count = 0;
    }
}