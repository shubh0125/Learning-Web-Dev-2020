var removeCartItemButtons=document.getElementsByClassName("btn-danger");
console.log(removeCartItemButtons)
for(var i=0; i<removeCartItemButtons.length;i++){
    var button=removeCartItemButtons[i]
    button.addEventListener('click', function(event){
        var buttonClicked=event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal();
        a();
    })
}
function updateCartTotal(){
    var cartRows=document.getElementsByClassName("cartRow");
    for(var i=0; i<cartRows.length;i++){
        var Row=cartRows[i];
        var priceElement=Row.getElementsByClassName("price")[0];
        var quantityElement=Row.getElementsByClassName("quantity")[0];
    }
 
}
