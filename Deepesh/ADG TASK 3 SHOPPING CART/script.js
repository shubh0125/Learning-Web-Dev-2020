var items= document.getElementById("billItems")
var total = document.getElementById("billTotal")


chocolates = {
  DairyMilk: 2,
  Twix: 3,
  Snickers: 4,
  Bounty: 5,
  MilkyWay: 6,
  Aero: 7
}

var chocolateitems = {}

function additemcart(brand) {
  if(brand in chocolateitems) {
    chocolateitems[brand][1]++
  }
  else {
    chocolateitems[brand] = [chocolates[brand], 1];
  }
  printTotal();
  printBill();
}

function printTotal() {
  var total = 0;
  for(choc in chocolateitems) {
    total += chocolateitems[choc][0] * chocolateitems[choc][1]
  }
  return total;
}

function removeitemcart(brand) {
  if (brand in chocolateitems) {
      chocolateitems[brand][1]--;
      if(chocolateitems[brand][1] == 0) {
          delete chocolateitems[brand];
      }
  }
  printTotal();
  printBill();
}

function deleteitemcart(brand) {
  delete chocolateitems[brand]
  printTotal();
  printBill();
}

function printBill() {
  items.innerHTML = '<h3 style= "margin-bottom: 10px"> BILL: </h3>';
  total.innerHTML = '';
  for(chocolate in chocolateitems) {
    var deleteItemButton = '<button class="btn bg-danger text-white" id="' + chocolate + '" onclick="deleteitemcart(this.id)">X</button>';
    var  addItemButton = '<button class="btn bg-success text-white" id="' + chocolate + '" onclick="additemcart(this.id)">+</button>';
    var RemoveItemButton = '<button class="btn bg-warning text-white" id="' + chocolate + '" onclick="removeitemcart(this.id)">-</button>';
    var sequence = chocolate + ' - Qty :  ' + chocolateitems[chocolate][1] + ' = $ ' + (chocolateitems[chocolate][1] * chocolateitems[chocolate][0]);
    items.innerHTML += '<div class="col-12 my-1 output">' + deleteItemButton + '<span class="sequence">' + sequence + '</span><span class="float-right" style="margin-right:20px">' + addItemButton + RemoveItemButton + '</span></div>';
}
total.innerHTML = '<span id = "billTotal"> Total:  ' + printTotal() + ' $</span>';
}

var timer
timer=setInterval(randomcolor,1800)
function randomcolor(){
    r=Math.random()*256
    g=Math.random()*256
    b=Math.random()*256
    r1=Math.random()*256
    g1=Math.random()*256
    b1=Math.random()*256
    var rgb1="rgb("+r1+","+g1+","+b1+")"
    var rgb="rgb("+r+","+g+","+b+")"
    randombgd.style.background="linear-gradient(to bottom,"+ rgb +"0%, "+rgb1 +"100%)"
}

