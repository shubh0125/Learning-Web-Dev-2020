const container=document.getElementById("signup_form");
const quiz=document.getElementById("quiz");
const ques=document.getElementById("question");
const counter=document.getElementById("counter");
const timegauge=document.getElementById("timegauge");
const ca=document.getElementById("a");
const cb=document.getElementById("b");
const cc=document.getElementById("c");
const cd=document.getElementById("d");
const scorecontainer=document.getElementById("scorecontainer");
const scoredisp=document.getElementById("score1");
const comment=document.getElementById('comment');
var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
function checkform()
{
    let flag=0;
    if(signup_form.name.value===""||signup_form.last_name.value===""||signup_form.email.value===""||signup_form.phone.value===""||signup_form.username.value===""||signup_form.password.value==="")
    {
        flag=1;
        alert("No field can be left empty");
    }
    else if (reg.test(signup_form.email.value)==false) 
    {
        alert("Incorrect email")
        flag=1;
        
    } 
  if(flag===0)
  {
      startquiz();
  }
}

let timer;
function startquiz(){
    container.style.display="none";
    counterrender();
    timer=setInterval(counterrender,1000);
    disp();
    quiz.style.display="block";
}

let count=0;
const qtime=10;
function counterrender()
{
    if(currentindex<=lastindex && count<qtime)
    {
        counter.innerHTML="Time remaining: "+(10-count)+" s";
        
        count++;
    }
    else if(currentindex<lastindex)
    {
        count=0;
        currentindex++;
        disp();
    }
    else{
        dispscore();
    }
}
function dispscore()
{
   quiz.style.display="none";  
    scorecontainer.style.display="block";
    scoredisp.innerHTML="<p>You Scored:<\p>"+score+"/5";
    if (score==0){
        comment.innerHTML='You should really get yourself informed';
    }
    else if (score==1){
        comment.innerHTML='Maybe the correct one was a fluke';
    }
    else if (score==2){
        comment.innerHTML='Maybe the correct ones were a fluke';
    }
    else if (score==3){
        comment.innerHTML='Maybe you were guessing?';
    }
    else if (score==4){
        comment.innerHTML='Oh, so close. Maybe you should try again';
    }
    else{
        comment.innerHTML='Well Done! You are safe';
    }
}

let  questions=
    [
        { 
            question:"What is the official name of the virus as designated by WHO?",
            ca:"Sars-CoV-2",
            cb:"Covid-19",
            cc:"Wuhan flu",
            cd:"Chinese Virus",
            correct:"b"
        },
        {
            question:"What does 19 in Covid-19 stand for?",
            ca:"19 molecules that make up the virus",
            cb:"19th coronavirus identified by WHO",
            cc:"Year it was first encountered",
            cd:"Times deadlier than other viruses",
            correct:"c"
        },
        {
            question:"Which of these have not been listed as a symptom?",
            ca:"Fever",
            cb:"Dry cough",
            cc:"Blurred vision",
            cd:"Nasal congestion",
            correct:"c"
        },
        {
            question:"Where does the virus primarily attack?",
            ca:"Lungs",
            cb:"Liver",
            cc:"Heart",
            cd:"Kidney",
            correct:"a"
        },
        {
            question:"How long can the virus stay alive on plastic?",
            ca:'72 hours',
            cb:'24 to 60 hours',
            cc:'4 to 12 hours',
            cd:'2 to 4 hours',
            correct:"a"
        }
]

let lastindex=4;
let currentindex=0;

function disp(){
    let q=questions[currentindex];
    ques.innerHTML="<p> Q"+(currentindex+1)+".  "+q.question+"</p>";
    ca.innerHTML=q.ca;
    cb.innerHTML=q.cb;
    cc.innerHTML=q.cc;
    cd.innerHTML=q.cd;
}
let score=0;
function checkanswer(answer){
    if(questions[currentindex].correct===answer){
        score++;
    }
    count=0;
    if(currentindex<lastindex){
        currentindex++;
        disp();
    }
    else if(currentindex===lastindex)
    {
        dispscore();
    }
}
function reset(){
    quiz.style.display="none";
    scorecontainer.style.display="none";
    container.style.display="block";
    score=0;
    currentindex=0;
    count=0;


}
