const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");

const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");

const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

//QUESTIONS ARRAY
let questions = [
    {
        question : "Which of the following is NOT a common symptom of the coronavirus?",
        choiceA : "Dry Cough",
        choiceB : "Fever",
        choiceC : "Rash",
        choiceD : "Shortness of Breath",
        correct : "C"
    },{
        question : "COVID-19 symptoms may appear in as few as 2 days or as many as ___ .",
        choiceA : "14 days",
        choiceB : "21 days",
        choiceC : "28 days",
        choiceD : "35 days",
        correct : "A"
    },{
        question : "We can limit the spread by maintaining a distance of ___.",
        choiceA : "12 inches",
        choiceB : "2 feet",
        choiceC : "4 feet",
        choiceD : "6 feet",
        correct : "D"
    },{
        question : "A vaccine for the coronavirus will take at least ___ to become available to the public.",
        choiceA : "6 weeks",
        choiceB : "3 months",
        choiceC : "6 months",
        choiceD : "1 year",
        correct : "D"
    },{
        question : "It is recommended that you wash your hands for at least ___.",
        choiceA : "5 seconds",
        choiceB : "10 seconds",
        choiceC : "20 seconds",
        choiceD : "4 minutes",
        correct : "C"
    }
];
//Questions from:
//https://www.nytimes.com/interactive/2020/03/17/learning/News-Quiz-Coronavirus.html

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; //TIME PER QUESTION IN SECONDS
const gaugeWidth = 150; 
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

function renderQuestion(){
    let q = questions[runningQuestion];

    question.innerHTML = "<h1>"+ q.question +"</h1>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);

function startQuiz(){
    rules.style.display = "none";
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else if (count >= questionTime){
        count = 0;
        answerIsSkipped();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            clearInterval(TIMER);
            scoreRender();
        }
    }else{
        count = 0;
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        score++;
        answerIsCorrect();
    }else if( answer != questions[runningQuestion].correct) {
        answerIsWrong();
    }
    else{
        answerIsSkipped();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        clearInterval(TIMER);
        scoreRender();
    }
}


function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#008000";
}
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#FF0000";
}
function answerIsSkipped(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0000FF"
}

function scoreRender(){
    progress.style.display = "none";
    timer.style.display = "none";
    quiz.style.display = "none";
    scoreDiv.style.display = "block";
    
    const scorePerCent = Math.round(100 * score/questions.length);
    
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}