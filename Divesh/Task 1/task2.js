const container=document.getElementById("myform");
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
var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
function checkform()
{
    let flag=0;
    if(myform.name.value===""||myform.last_name.value===""||myform.email.value===""||myform.phone.value===""||myform.username.value===""||myform.password.value==="")
    {
        flag=1;
        alert("No field can be left empty");
    }
    else if (reg.test(myform.email.value)==false) 
    {
        alert("incorrect email")
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
const qtime=60;
function counterrender()
{
    if(currentindex<=lastindex && count<qtime)
    {
        counter.innerHTML="Time remaining: "+(60-count)+" s";
        
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
    scoredisp.innerHTML="<p>Your Score:<\p>"+score+"/5";
     
     

}

let  questions=[
    { question:"What is the capital of India?",
ca:"New Delhi",
cb:"Mumbai",
cc:"Kolkata",
cd:"Chennai",
correct:"a"},
{
 question:"Which is the largest Indian state?",
ca:"Uttar Pradesh",
cb:"Rajasthan",
cc:"Maharashtra",
cd:"Karnataka",
correct:"b"
},
{
question:"Which country won the 2018 FIFA World Cup?",
ca:"Brazil",
cb:"Argentina",
cc:"Croatia",
cd:"France",
correct:"d"},
{
    question:"Who are responsible for coronavirus?",
    ca:"Indian",
    cb:"Chinese",
    cc:"Japanese",
    cd:"Dutch",
    correct:"b"},
    {
        question:"What is 99x99?",
        ca:9999,
        cb:9898,
        cc:9901,
        cd:9801,
        correct:"d"}
        
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