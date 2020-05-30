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


function getTotal() {
    var totalPrice = 0;
    for(foodItem in foodItemsList) {
        totalPrice += foodItemsList[foodItem][0] * foodItemsList[foodItem][1];
    }
    return totalPrice;
}

foodItems = {
    SAMOSA: 5,
    PASTA: 60,
    PIZZA: 60,
    BURGER: 45,
}

function displayBill() {
    document.querySelector('#billItems').innerHTML = '<h1 style = "margin-bottom: 10px;"></h1>';
    document.querySelector('#finalBill').innerHTML = '';
    for(foodItem in foodItemsList){
        var removeItemButton = '<button id = "' + foodItem + '" onclick = "removeFoodItem(this.id)"><i class="fa fa-times" aria-hidden="true"></i></button>';
        var summary = foodItem + '  ( ' + foodItemsList[foodItem][1] + ' ) Rs. ' + foodItemsList[foodItem][1] * foodItemsList[foodItem][0];
        document.querySelector('#billItems').innerHTML += '<span style="font-size: 1.25em; font-weight: 500;">' + summary + 'Rs<span>&emsp;&emsp;' + removeItemButton + '<br>';
        document.getElementById('billItems').style.textAlign = "left"
        document.getElementById('billItems').style.paddingLeft = "120px"
    }
    document.querySelector('#finalBill').innerHTML = '<span id = "finalBill"><br><br>You have to pay ' + getTotal() + ' Rs</span>';
    var button = document.createElement("button");
    button.innerHTML = "Do Something";
}