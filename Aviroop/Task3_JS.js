foodItems = {
    Rice: 50,
    Naan: 6,
    Chicken: 60,
    Paneer: 65,
    Milkshake: 55,
    Dessert: 30
}

var foodItemsList = {}

function addFoodItem(itemName) {
    if (itemName in foodItemsList)
        foodItemsList[itemName][1]++;
    else
        foodItemsList[itemName] = [foodItems[itemName], 1];
    getTotal();
    displayBill();
}

function removeFoodItem(itemName) {
    if (itemName in foodItemsList) {
        foodItemsList[itemName][1]--;
        if(foodItemsList[itemName][1] == 0)
            delete foodItemsList[itemName];
    }
    getTotal();
    displayBill();
}

function deleteFoodItem(itemName) {
    delete foodItemsList[itemName];
    getTotal();
    displayBill();
}

function getTotal() {
    var totalPrice = 0;
    for(foodItem in foodItemsList) {
        totalPrice += foodItemsList[foodItem][0] * foodItemsList[foodItem][1];
    }
    return totalPrice;
}

function displayBill() {
    document.querySelector('#billItems').innerHTML = '<h1 style = "margin-bottom: 10px;">&nbsp; YOUR BILL:</h1>';
    document.querySelector('#finalBill').innerHTML = '';
    for(foodItem in foodItemsList){
        var deleteItemButton = '<button id = "' + foodItem + '" style = "width: 20px; height: 20px; background-color: red" onclick = "deleteFoodItem(this.id)">X</button>';
        var addItemButton = '<button id = "' + foodItem + '" style = "width: 20px; height: 20px; background-color: lightgreen" onclick = "addFoodItem(this.id)">+</button>';
        var removeItemButton = '<button id = "' + foodItem + '" style = "width: 20px; height: 20px; background-color: yellow" onclick = "removeFoodItem(this.id)">-</button>';
        var summary = foodItem + ' ---> Qty: ' + foodItemsList[foodItem][1] + ' ---> Rs. ' + foodItemsList[foodItem][1] * foodItemsList[foodItem][0];
        document.querySelector('#billItems').innerHTML += '<span>&nbsp; &nbsp; &nbsp; ' + addItemButton + '&nbsp; ' + removeItemButton + '&nbsp; ' + deleteItemButton + '&nbsp; </span><span style="font-size: 1.25em; font-weight: 500;">&nbsp; ' + summary + '/-</span></span><br>';
    }
    document.querySelector('#finalBill').innerHTML = '<span id = "finalBill">Your Total Bill is Rs. ' + getTotal() + '/-</span>';
}

var timer;
timer = setInterval(changeBackgrounColor, 1200);
function changeBackgrounColor() {
    r=Math.random()*200;
    g=Math.random()*200;
    b=Math.random()*200;
    r1=Math.random()*200;
    g1=Math.random()*200;
    b1=Math.random()*200;
    var rgb1="rgb("+r1+","+g1+","+b1+")";
    var rgb="rgb("+r+","+g+","+b+")";
    document.getElementById("menu").style.background = "linear-gradient(to top,"+ rgb +"0%, "+rgb1 +"100%)";
}