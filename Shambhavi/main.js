function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var correct = 0;


	if (question1 == "Beyond The Scene") {
		correct++;
}
	if (question2 == "7") {
		correct++;
}	
	if (question3 == "2013") {
		correct++;
    }
    if (question4 == "South Korea"){
        correct++;
    }	
    if (question5 == "Billboard Music Award"){
        correct++;
    }
	var messages = ["Anneyong Chingu!","Gwenchana!","Meh","Did you guess?", "UNO!", "Google BTS ooof"];
	var score;

	if (correct == 0) {
		score = 5;
	}

	else if (correct == 1) {
		score = 4;
    }
    else if (correct == 2){
        score = 3;
    }
    else if (correct == 3){
        score = 2;
    }
    else if (correct == 4){
        score = 1;
    }
	else {
		score = 0;
    }


	document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("message").innerHTML = messages[score];
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
    document
	}

var t=60;
function timer (){
    var x = document.getElementById("timer1").innerHTML = t;
    t--;
}
var xx = setInterval('timer()', 1000);
 function y(){
     clearInterval(xx);
 }
 setTimeout('y()',60000);

 function openwindow() 
 { 
 window.open('fquiz.htm'); 
 }
