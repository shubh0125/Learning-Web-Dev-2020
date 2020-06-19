//NAVBAR AND OVERLAY MENU

let menuIcon = document.querySelector(".menuIcon");
let nav = document.querySelector(".overlay-menu");

menuIcon.addEventListener("click", () => {
	if (nav.style.transform != "translateX(0%)") {
		nav.style.transform = "translateX(0%)";
		nav.style.transition = "transform 0.2s ease-out";
	} else {
		nav.style.transform = "translateX(-100%)";
		nav.style.transition = "transform 0.2s ease-out";
	}
});

// Toggle Menu Icon
let toggleIcon = document.querySelector(".menuIcon");

toggleIcon.addEventListener("click", () => {
	if (toggleIcon.className != "menuIcon toggle") {
		toggleIcon.className += " toggle";
	} else {
		toggleIcon.className = "menuIcon";
	}
});

//SLIDESHOW PICS

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides((slideIndex += n));
}

function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex - 1].style.display = "block";
}

//ADD TO CART SYSTEM

//1
function addItem1() {
	var table = document.getElementById("myTable");
	var rowCount = table.rows.length;
	var row = table.insertRow(rowCount);
	row.insertCell(0).innerHTML = "Veg Burger";
	row.insertCell(1).innerHTML = 1;
	row.cells[1].id = "a";
	row.insertCell(2).innerHTML = '<button onClick="add1()"> + </button>';
	row.insertCell(3).innerHTML = '<button onClick="sub1()"> - </button>';
	row.insertCell(4).innerHTML =
		'<button onClick="deleteRow(this)"> Delete </button>';
	row.insertCell(5).innerHTML = 79;
	row.cells[5].id = "a0";
}

function add1() {
	var n = document.getElementById("a").innerHTML;
	m = parseInt(n);
	m = m + 1;
	document.getElementById("a").innerHTML = m;
	document.getElementById("a0").innerHTML = m * 79;
}

function sub1() {
	var n = document.getElementById("a").innerHTML;
	m = parseInt(n);
	m = m - 1;
	document.getElementById("a").innerHTML = m;
	document.getElementById("a0").innerHTML = m * 79;
}

//2
function addItem2() {
	var table = document.getElementById("myTable");
	var rowCount = table.rows.length;
	var row = table.insertRow(rowCount);
	row.insertCell(0).innerHTML = "Paneer Burger";
	row.insertCell(1).innerHTML = 1;
	row.cells[1].id = "b";
	row.insertCell(2).innerHTML = '<button onClick="add2()"> + </button>';
	row.insertCell(3).innerHTML = '<button onClick="sub2()"> - </button>';
	row.insertCell(4).innerHTML =
		'<button onClick="deleteRow(this)"> Delete </button>';
	row.insertCell(5).innerHTML = 109;
	row.cells[5].id = "b0";
}

function add2() {
	var n = document.getElementById("b").innerHTML;
	m = parseInt(n);
	m = m + 1;
	document.getElementById("b").innerHTML = m;
	document.getElementById("b0").innerHTML = m * 109;
}

function sub2() {
	var n = document.getElementById("b").innerHTML;
	m = parseInt(n);
	m = m - 1;
	document.getElementById("b").innerHTML = m;
	document.getElementById("b0").innerHTML = m * 109;
}

//3
function addItem3() {
	var table = document.getElementById("myTable");
	var rowCount = table.rows.length;
	var row = table.insertRow(rowCount);
	row.insertCell(0).innerHTML = "Aloo Tikki Burger";
	row.insertCell(1).innerHTML = 1;
	row.cells[1].id = "c";
	row.insertCell(2).innerHTML = '<button onClick="add3()"> + </button>';
	row.insertCell(3).innerHTML = '<button onClick="sub3()"> - </button>';
	row.insertCell(4).innerHTML =
		'<button onClick="deleteRow(this)"> Delete </button>';
	row.insertCell(5).innerHTML = 49;
	row.cells[5].id = "c0";
}

function add3() {
	var n = document.getElementById("c").innerHTML;
	m = parseInt(n);
	m = m + 1;
	document.getElementById("c").innerHTML = m;
	document.getElementById("c0").innerHTML = m * 49;
}

function sub3() {
	var n = document.getElementById("c").innerHTML;
	m = parseInt(n);
	m = m - 1;
	document.getElementById("c").innerHTML = m;
	document.getElementById("c0").innerHTML = m * 49;
}

//4
function addItem4() {
	var table = document.getElementById("myTable");
	var rowCount = table.rows.length;
	var row = table.insertRow(rowCount);
	row.insertCell(0).innerHTML = "Paneer Wrap";
	row.insertCell(1).innerHTML = 1;
	row.cells[1].id = "d";
	row.insertCell(2).innerHTML = '<button onClick="add4()"> + </button>';
	row.insertCell(3).innerHTML = '<button onClick="sub4()"> - </button>';
	row.insertCell(4).innerHTML =
		'<button onClick="deleteRow(this)"> Delete </button>';
	row.insertCell(5).innerHTML = 149;
	row.cells[5].id = "d0";
}

function add4() {
	var n = document.getElementById("d").innerHTML;
	m = parseInt(n);
	m = m + 1;
	document.getElementById("d").innerHTML = m;
	document.getElementById("d0").innerHTML = m * 149;
}

function sub4() {
	var n = document.getElementById("d").innerHTML;
	m = parseInt(n);
	m = m - 1;
	document.getElementById("d").innerHTML = m;
	document.getElementById("d0").innerHTML = m * 149;
}

//5
function addItem5() {
	var table = document.getElementById("myTable");
	var rowCount = table.rows.length;
	var row = table.insertRow(rowCount);
	row.insertCell(0).innerHTML = "Classic Cold Coffee";
	row.insertCell(1).innerHTML = 1;
	row.cells[1].id = "e";
	row.insertCell(2).innerHTML = '<button onClick="add5()"> + </button>';
	row.insertCell(3).innerHTML = '<button onClick="sub5()"> - </button>';
	row.insertCell(4).innerHTML =
		'<button onClick="deleteRow(this)"> Delete </button>';
	row.insertCell(5).innerHTML = 59;
	row.cells[5].id = "e0";
}

function add5() {
	var n = document.getElementById("e").innerHTML;
	m = parseInt(n);
	m = m + 1;
	document.getElementById("e").innerHTML = m;
	document.getElementById("e0").innerHTML = m * 59;
}

function sub5() {
	var n = document.getElementById("e").innerHTML;
	m = parseInt(n);
	m = m - 1;
	document.getElementById("e").innerHTML = m;
	document.getElementById("e0").innerHTML = m * 59;
}

//6
function addItem6() {
	var table = document.getElementById("myTable");
	var rowCount = table.rows.length;
	var row = table.insertRow(rowCount);
	row.insertCell(0).innerHTML = "Chocolate Brownie";
	row.insertCell(1).innerHTML = 1;
	row.cells[1].id = "g";
	row.insertCell(2).innerHTML = '<button onClick="add6()"> + </button>';
	row.insertCell(3).innerHTML = '<button onClick="sub6()"> - </button>';
	row.insertCell(4).innerHTML =
		'<button onClick="deleteRow(this)"> Delete </button>';
	row.insertCell(5).innerHTML = 129;
	row.cells[5].id = "g0";
}

function add6() {
	var n = document.getElementById("g").innerHTML;
	m = parseInt(n);
	m = m + 1;
	document.getElementById("g").innerHTML = m;
	document.getElementById("g0").innerHTML = m * 129;
}

function sub6() {
	var n = document.getElementById("g").innerHTML;
	m = parseInt(n);
	m = m - 1;
	document.getElementById("g").innerHTML = m;
	document.getElementById("g0").innerHTML = m * 129;
}

function deleteRow(obj) {
	var index = obj.parentNode.parentNode.rowIndex;
	var table = document.getElementById("myTable");
	table.deleteRow(index);
}

function total() {
	var table = document.getElementById("myTable"),
		sum = 0;
	for (var i = 1; i < table.rows.length; i++) {
		sum = sum + parseInt(table.rows[i].cells[5].innerHTML);
	}
	document.getElementById("demo").innerHTML = "₹" + sum;
}

//Show Cart
function show() {
	console.log("Show Cart");
	document.getElementById("cartContainer").style.display = "block";
}
