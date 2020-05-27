const start = document.querySelector("#question-container")
const controls = document.querySelector("#start-button")
const question = document.getElementById("question")
const optionA = document.getElementById("A")
const optionB = document.getElementById("B")
const optionC = document.getElementById("C")
const optionD = document.getElementById("D")
const timer = document.getElementById("numbertimer")
const score = document.getElementById("scoredisplay")
const scoredisplay = document.getElementById("scorecontainer")
const reset = document.getElementsByClassName("resetbutton")

//Questions array to add the questions
let questionArray = [
    {
        question: "Whose goalscoring record did Ronaldo break at Real Madrid in 2015?",
        optionA: "Alfredo Di Stefano",
        optionB: "Raul",
        optionC: "Ronaldo",
        optionD: "Ferenc Puskas",
        correctOption: "B"
    },
    {
        question: "In which city did Ronaldo and Real Madrid win the Champions League final in 2014, completing 'La Decima'?",
        optionA: "Madrid",
        optionB: "Lisbon",
        optionC: "London",
        optionD: "Paris",
        correctOption: "B"
    },
    {
        question: "Which player's tackle forced Ronaldo off on a stretcher in the Euro 2016 final?",
        optionA: "Paul Pogba",
        optionB: "Patrice Evra",
        optionC: "Dimitri Payet",
        optionD: " Olivier Giroud",
        correctOption: "C"
    },
    {
        question: "Ronaldo scored the winning goal on his return to Old Trafford in a 2013 Champions League clash - who got sent off for United in the same game?",
        optionA: "Wayne Rooney",
        optionB: "Paul Scholes",
        optionC: "Darren Fletcher",
        optionD: "Nani",
        correctOption: "D"
    },
    {
        question: "Ronaldo's famous 'Knuckleball' free-kick against Portsmouth in 2008 left which goalkeeper standing?",
        optionA: "David James",
        optionB: "Asmir Begovic",
        optionC: "Steve Mandanda",
        optionD: "Shaka Hislop",
        correctOption: "A"
    },
]

controls.addEventListener("click",startQuiz)

const lastQuestionIndex = questionArray.length -1;
let workingQuestionIndex = 0
let count = 0
let  total = 0
let timerVar;
const allowedTime = 40
let scoreOpinion =""


function startQuiz(){
    controls.classList.add("hide")
    start.classList.remove('hide')
    outputQuestion()
    startTimer()
    timerVar = setInterval(startTimer,1000)  
}

function outputQuestion(){
    let qstn = questionArray[workingQuestionIndex]
    question.textContent = qstn.question;
    optionA.textContent = qstn.optionA
    optionB.textContent = qstn.optionB
    optionC.textContent = qstn.optionC
    optionD.textContent = qstn.optionD
}



function startTimer() {
    if((count < allowedTime) && (workingQuestionIndex <= lastQuestionIndex)){                                            
        timer.innerHTML="Time remaining: "+(40-count)+" s";
        count++;
        console.log(count)
    }
    else if(workingQuestionIndex < lastQuestionIndex) {
        count=0;
        workingQuestionIndex++;
        outputQuestion();
    }
    else{
        showScore();
    }
    }

function checkCorrect(ans) {
    if(ans === questionArray[workingQuestionIndex].correctOption){
        total += 1;
    }
    count =0;
    if(workingQuestionIndex < lastQuestionIndex) {
        workingQuestionIndex += 1;
        outputQuestion();
    }
    else if(workingQuestionIndex === lastQuestionIndex){
        showScore();
    }
}


function showScore(){
    scoredisplay.classList.remove("hide")
    start.classList.add('hide')
    switch(total) {
        case 1: 
        scoreOpinion = "Ahh!, Too Bad";
        break;
        case 2: 
        scoreOpinion = "Ahh!, Meagre";
        break;
        case 3: 
        scoreOpinion = "Ahh!, Borderline";
        break;
        case 4: 
        scoreOpinion = "Good Effort!";
        break;
        case 5: 
        scoreOpinion = "You smashed it!";
        break;
        default:
            scoreOpinion = "Have a good Day!"

    }
    score.innerHTML = `${total} out of ${questionArray.length}, ${scoreOpinion}`;
    clearTimeout(timerVar);
}

function resetoption(){
    start.classList.add('hide')
    controls.classList.remove('hide')
    scoredisplay.classList.add('hide')
    count=0
    total=0
    workingQuestionIndex =0
}



