function addItem1()
{
    var table = document.getElementById("myTableData");
    var rowCount=table.rows.length;
    var row = table.insertRow(rowCount);
    row.insertCell(0).innerHTML="Pizza";
    row.insertCell(1).innerHTML= 1;
    row.cells[1].id='a';
    row.insertCell(2).innerHTML= '<input type="button" value="+" class="button2" onClick="add1()">';
    row.insertCell(3).innerHTML= '<input type="button" value="Delete" class="button3" onClick="deleteRow(this)">';
    row.insertCell(4).innerHTML= 50;
    row.cells[4].id='a0';
}
function addItem2()
{
    var table = document.getElementById("myTableData");
    var rowCount=table.rows.length;
    var row = table.insertRow(rowCount);
    row.insertCell(0).innerHTML="Burger";
    row.insertCell(1).innerHTML=1;
    row.cells[1].id='b';
    row.insertCell(2).innerHTML= '<input type="button" value="+" class="button2" onClick="add2()">';
    row.insertCell(3).innerHTML= '<input type="button" value="Delete" class="button3" onClick="deleteRow(this)">';
    row.insertCell(4).innerHTML= 40;
    row.cells[4].id='b0';
}
function addItem3()
{
    var table = document.getElementById("myTableData");
    var rowCount=table.rows.length;
    var row = table.insertRow(rowCount);
    row.insertCell(0).innerHTML="Waffle";
    row.insertCell(1).innerHTML=1;
    row.cells[1].id='c';
    row.insertCell(2).innerHTML= '<input type="button" value="+" class="button2" onClick="add3()">';
    row.insertCell(3).innerHTML= '<input type="button" value="Delete" class="button3" onClick="deleteRow(this)">';
    row.insertCell(4).innerHTML= 15;
    row.cells[4].id='c0';
}
function addItem4()
{
    var table = document.getElementById("myTableData");
    var rowCount=table.rows.length;
    var row = table.insertRow(rowCount);
    row.insertCell(0).innerHTML="Coca Cola";
    row.insertCell(1).innerHTML=1;
    row.cells[1].id="d";
    row.insertCell(2).innerHTML= '<input type="button" value="+" class="button2" onClick="add4()">';
    row.insertCell(3).innerHTML= '<input type="button" value="Delete" class="button3" onClick="deleteRow(this)">';
    row.insertCell(4).innerHTML= 10;
    row.cells[4].id='d0';
}
function deleteRow(obj) {
      
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);
    
}
function add1(){
    var n=document.getElementById("a").innerHTML ;
    m=parseInt(n);
    m=m+1;
    document.getElementById("a").innerHTML=m;
    document.getElementById("a0").innerHTML=m*50;
  }
  function add2(){
    var n=document.getElementById("b").innerHTML ;
    m=parseInt(n);
    m=m+1;
    document.getElementById("b").innerHTML=m;
    document.getElementById("b0").innerHTML=m*40;

  }
  function add3(){
    var n=document.getElementById("c").innerHTML ;
    m=parseInt(n);
    m=m+1;
    document.getElementById("c").innerHTML=m;
    document.getElementById("c0").innerHTML=m*15;
  }
function add4(){
  var n=document.getElementById("d").innerHTML ;
  m=parseInt(n);
  m=m+1;
  document.getElementById("d").innerHTML=m;
  document.getElementById("d0").innerHTML=m*10;
}
function total(){
    var table = document.getElementById("myTableData"),sumVal=0;
    for(var i=1;i<table.rows.length;i++)
    {
        sumVal = sumVal + parseInt(table.rows[i].cells[4].innerHTML);
    }
    document.getElementById("demo").innerHTML= "$"+sumVal;

}

function setbackground()
{
window.setTimeout( "setbackground()", 2000); // 5000 milliseconds delay
var index = Math.round(Math.random() * 9);
var ColorValue = "FFFFFF"; // default color - white (index = 0)
if(index == 1)
ColorValue = "FFCCCC"; //peach
if(index == 2)
ColorValue = "CCAFFF"; //violet
if(index == 3)
ColorValue = "A6BEFF"; //lt blue
if(index == 4)
ColorValue = "99FFFF"; //cyan
if(index == 5)
 ColorValue = "D5CCBB"; //tan
if(index == 6)
ColorValue = "99FF99"; //lt green
if(index == 7)
ColorValue = "FFFF99"; //lt yellow
if(index == 8)
ColorValue = "FFCC99"; //lt orange
if(index == 9)
ColorValue = "CCCCCC"; //lt grey
document.getElementsByTagName("body")[0].style.backgroundColor = "#" + ColorValue;
}
