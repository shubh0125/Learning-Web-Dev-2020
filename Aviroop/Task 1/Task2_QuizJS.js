const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const image = document.getElementById("image");
const optionA = document.getElementById("A");
const optionB = document.getElementById("B");
const optionC = document.getElementById("C");
const optionD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const score = document.getElementById("scoreContainer");
const resizedButton = document.getElementById("resizedButton");

let questionsList = [
    {
        question : "Q) Which European country technically shares a border with Brazil, because one of its “overseas departments” does?",
        optionA : "A) Germany",
        optionB : "B) Belgium",
        optionC : "C) France",
        optionD : "D) Great Britain",
        correctAnswer : "C"
    },
    {
        question : "Q) What Scottish poet’s works inspired the book titles Of Mice and Men and Catcher in the Rye?",
        optionA : "A) R. L. Stevenson",
        optionB : "B) Robert Burns",
        optionC : "C) James Hogg",
        optionD : "D) Walter Alva Scott",
        correctAnswer : "B"
    },
    {
        question : "Q) What princess was traditionally called Badr al-Budur before Disney renamed her?",
        optionA : "A) Belle",
        optionB : "B) Jasmine",
        optionC : "C) Anna",
        optionD : "D) Ariel",
        correctAnswer : "B"
    },
    {
        question : "Q) The three actors who starred as Magneto, Iron Man and Doctor Strange have all played what other character?",
        optionA : "A) James Bond",
        optionB : "B) Basil Fawlty",
        optionC : "C) Ebenezer Scrooge",
        optionD : "D) Sherlock Holmes",
        correctAnswer : "D"
    },
    {
        question : "Q) So far, which has been the only FIFA World Cup host not to make it out of the group stage?",
        optionA : "A) South Africa",
        optionB : "B) Mexico",
        optionC : "C) United States",
        optionD : "D) Brazil",
        correctAnswer : "A"
    }
];

const lastQuestionIndex = questionsList.length - 1;
let currentQuestionIndex = 0;

let count = 0;
let questionTime = 60;
const gaugeWidth = 150;
const gaugeUnit = gaugeWidth / questionTime;
let timerVar;
let userScore = 0;

start.addEventListener("click", startQuiz);

function renderQuestion() {
    let q = questionsList[currentQuestionIndex];
    question.innerHTML = "<p>" + q.question + "</p>";
    image.innerHTML = "<img src = \"https://image.shutterstock.com/image-vector/quiz-comic-pop-art-style-260nw-1506580442.jpg\">";
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

function renderCounter() {
    if(count <= questionTime) {
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count += 1;
    }
    else {
        count = 0;
        answerIsIncorrect();
        if(currentQuestionIndex < lastQuestionIndex) {
            currentQuestionIndex += 1;
            renderQuestion();
        }
        else {
            clearInterval(timerVar);
            renderScore();
        }
    }
}

function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    timerVar = setInterval(renderCounter, 1000);
}

function checkAnswer(answer) {
    if(answer == questionsList[currentQuestionIndex].correctAnswer) {
        userScore += 1;
        answerIsCorrect();
    }
    else {
        answerIsIncorrect();
    }
    count = 0;
    if(currentQuestionIndex < lastQuestionIndex) {
        currentQuestionIndex += 1;
        renderQuestion();
    }
    else {
        clearInterval(timerVar);
        renderScore();
    }
}

function answerIsCorrect() {
    document.getElementById(currentQuestionIndex).style.backgroundColor = "green";
}

function answerIsIncorrect() {
    document.getElementById(currentQuestionIndex).style.backgroundColor = "red";
}

function renderScore() {
    score.style.display = "block";
    scorePercent = Math.round((userScore / questionsList.length) * 100);
    score.innerHTML = "<p>CONGRATULATIONS, YOUR FINAL SCORE: " + scorePercent + "%</p>";
    resizedButton.innerHTML = "<button>OK</button>"
}