fruits = {
    Apple:120,
    Mango: 60, 
    Banana: 30, 
    Melon: 50, 
    Grapes: 40,
    Orange: 80, 
    Peach: 120,
    Cherry: 150,
    Pear: 90, 
    Kiwi: 70, 
    Lemon: 100, 
    Pie: 0 
}

var fruitList = {}

function addItem(name) {
    if (name in fruitList) {
        fruitList[name][1]++;
    } else {
        fruitList[name] = [fruits[name], 1];
    }
    // console.log(fruitList);
    getTotal();
    dispBill();
}

function removeItem(name) {
    if (name in fruitList) {
        fruitList[name][1]--;
        if(fruitList[name][1] == 0) {
            delete fruitList[name];
        }
    }
    // console.log(fruitList);
    getTotal();
    dispBill();
}

function deleteItem(name) {
    delete fruitList[name];
    // console.log(fruitList);
    getTotal();
    dispBill();
}

function getTotal() {
    var total = 0;
    for(fruit in fruitList) {
        // billItems.push([fruit, fruitList[fruit][0], fruitList[fruit][1]]);
        total += fruitList[fruit][0] * fruitList[fruit][1];
    }
    // console.log(total);
    return total;
}

function dispBill() {
    document.querySelector('#bill_item').innerHTML = '<h3>Bill</h3>';
    document.querySelector('#bill_total').innerHTML = '';
    for(fruit in fruitList){
        var xButton = '<button class="btn bg-danger text-white" id="' + fruit + '" onclick="deleteItem(this.id)">X</button>';
        var plusButton = '<button class="btn bg-success text-white" id="' + fruit + '" onclick="addItem(this.id)">+</button>';
        var minusButton = '<button class="btn bg-warning text-white" id="' + fruit + '" onclick="removeItem(this.id)">-</button>';
        var summary = fruit + ' X ' + fruitList[fruit][1] + ' = ₹' + fruitList[fruit][1] * fruitList[fruit][0];
        // console.log(fruit, fruitList[fruit], summary);
        $('#bill_item').append('<div class= "col-12 bill_sums my-1">' + xButton + '<span class="text-center" style="font-size: 1.25em; font-weight: 500;">' + summary + '</span><span class="float-right">' + minusButton + plusButton +'</span></div>');
    }
    $('#bill_total').append('<h4>Total = ₹' + getTotal() + '</h4>');       
}

var timer
timer=setInterval(changebgd,1500)
function changebgd(){
    r=Math.random()*256
    g=Math.random()*256
    b=Math.random()*256
    r1=Math.random()*256
    g1=Math.random()*256
    b1=Math.random()*256
    var rgb1="rgb("+r1+","+g1+","+b1+")"
    var rgb="rgb("+r+","+g+","+b+")"
    document.getElementById("shopping").style.background="linear-gradient(to bottom,"+ rgb +"0%, "+rgb1 +"100%)"
}