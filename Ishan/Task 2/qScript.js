const start = document.getElementById("start");
const rules= document.getElementById("rules");
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
        question : " Which of the following phenomena cannot be observed on the surface of the Moon?",
        choiceA : "Rising and setting of the Sun",
        choiceB : "Solar eclipse",
        choiceC : "Motion of comets",
        choiceD : "Twinkling of stars",
        correct : "D"
    },{
        question : "Which of the following planets has a revolution time which is shorter than its rotation time?",
        choiceA : "Jupiter",
        choiceB : "Venus",
        choiceC : "Mars",
        choiceD : "Uranus",
        correct : "B"
    },{
        question : "Which planet looks reddish in the night sky?",
        choiceA : "Jupiter",
        choiceB : "Saturn",
        choiceC : "Mars",
        choiceD : "Mercury",
        correct : "C"
    },{
        question : "Which planet has the fastest revolution time?",
        choiceA : "Mercury",
        choiceB : "Uranus",
        choiceC : "Neptune",
        choiceD : "Neptune",
        correct : "A"
    },{
        question : " Which female astronaut spent the maximum time in space?",
        choiceA : "Lisa Norwak",
        choiceB : "Kalpana Chawala",
        choiceC : "Sunita Williams",
        choiceD : "None of these",
        correct : "C"
    }
];

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
// document.getElementById("jk").addEventListener("click",startQuiz);
// function startQuiz(){
//     start.style.display="none";
//     rules.style.display = "none";
//     renderQuestion();
//     quiz.style.display = "block";
//     renderProgress();
//     renderCounter();
//     TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
// }
document.getElementById("jk").addEventListener("click",function(){ 
    document.getElementById("rules").style.display = "none"; 
    document.getElementById("jk").style.display = "none";
    renderQuestion();
    document.getElementById("quiz").style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
 });

function startQuiz(){
    
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
    scoreDiv.style.color= "rgba(10, 3, 77)";
    scoreDiv.style.textAlign= "center";
    scoreDiv.style.marginTop= "-30px";
    scoreDiv.style.fontSize= "30px"
    
}