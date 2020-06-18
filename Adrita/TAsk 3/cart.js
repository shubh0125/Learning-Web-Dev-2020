

var removeCartitembuttons=document.getElementsByClassName('b');
console.log(removeCartitembuttons)
for(var i=0;i<removeCartitembuttons.length;i++){
    var button=removeCartitembuttons[i]
    button.addEventListener('click',removeCartItem)
}

var quantityInputs=document.getElementsByClassName("quantity")
for(var i=0;i<quantityInputs.length;i++){
    var input=quantityInputs[i]
    input.addEventListener('change',quantitychanged)
}

var addToCartbuttons=document.getElementsByClassName("a")
for(var i=0;i<addToCartbuttons.length;i++){
    var button=addToCartbuttons[i]
    button.addEventListener('click', addToCartclicked)
}

document.getElementsByClassName("c")[0].addEventListener('click',purchaseClicked)

function purchaseClicked(){
    alert('Thank You for your purchase')
    var cartItems=document.getElementsByClassName("all-items")[0]
    while(cartItems.hasChildNodes()){
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal();
}

function quantitychanged(event){
    var input=event.target
    if(isNaN(input.value) || input.value<=0){
        input.value=1;
    }
    updateCartTotal();
}
function addToCartclicked(event){
    var button=event.target
    var shopitem=button.parentElement.parentElement.parentElement
    var title=shopitem.getElementsByClassName("name")[0].textContent
    var price=shopitem.getElementsByClassName("price")[0].textContent
    var imageSrc=shopitem.getElementsByClassName("image")[0].src
    addItemtoCart(title,price,imageSrc)
    updateCartTotal();
}
function addItemtoCart(title,price,imageSrc){
    var cartRow=document.createElement("div")
    var cartItems=document.getElementsByClassName("all-items")[0];
    var cartItemNames=cartItems.getElementsByClassName("item-name")
    for(var i=0;i<cartItemNames.length;i++){
        if(cartItemNames[i].textContent==title){
            alert('You have already added this item')
            return
        }
    }
    var cartRowcontents=`<div class="cart-items" style="display: flex;">
    <div class="Srno"><img src="${imageSrc}" style="width:50px;height:50px;"></div>
    <div class="item-name">${title}</div>
    <div class="item-price" value="${price}" >${price}</div>
    <div class="items-quantity"><form method="GET"><input type="number" style="width: 3em;" value="1" class="quantity"></form></div>
    <div class="remove"><button class="b">X</button></div>
</div>`
cartRow.innerHTML=cartRowcontents
cartItems.append(cartRow)
cartRow.getElementsByClassName("b")[0].addEventListener('click',removeCartItem)
cartRow.getElementsByClassName("quantity")[0].addEventListener('change',quantitychanged)
}
function removeCartItem(event){
    var buttonClicked=event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal();
}
function updateCartTotal(){
    var cartRows=document.getElementsByClassName("cart-items")
    var total=0;
    for(var i=0;i<cartRows.length;i++)
    {
        var cartRow=cartRows[i]
        var priceElement=cartRow.getElementsByClassName("item-price")[0];
        var quantityElement=cartRow.getElementsByClassName("quantity")[0];
        var price=parseFloat(priceElement.textContent.replace('Rs.',''));
        var quantity=parseFloat(quantityElement.value);
        total=total+(price*quantity);
    }
    document.getElementsByClassName("total")[0].textContent='Rs.'+total;
}