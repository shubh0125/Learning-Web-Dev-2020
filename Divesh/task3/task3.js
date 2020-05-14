var shoppinglist=document.getElementById('cart');
function item(name,price,count){
    this.name=name;
    this.price=price;
    this.count=count;
}
var cartlist=[];



function addtocart(fruit,price,count)
{
    var newfruit=new item(fruit,Number(price),Number(count));
    for(var i in cartlist)
    {
        if(newfruit.name==cartlist[i].name)
        {
            cartlist[i].count+=Number(newfruit.count);
            dispcart();
            return;
        }
    }
    cartlist.push(newfruit);
    dispcart();
}
function removefromcart(fruit)
{
    var name= fruit.getAttribute("data-name");
    for(var i in cartlist)
    {
        if(name==cartlist[i].name);
        {
            if(cartlist[i].count==1)
            {
                delete cartlist[i];
                dispcart();
                return;
            }
            else
            {
                cartlist[i].count-=1;
            }
        }
    }
    dispcart();

}

function dispcart()
{
    var code="";
    cartlist.forEach(function(x){
      
        
        code+="<button class='btn btn-danger' onclick='del(this)'  data-name='"+x.name+"' > X </button> <li class='item'> "+x.name+"</li>  <button class='btn as' id='add1' onclick='add(this)' data-name='"+x.name+"' data-price='"+x.price+"'> + </button>   <input type='number' class='quantity'  min='0' value='" +x.count+"'>   <button class='btnas' id='subttract' onclick='removefromcart(this)'  data-name='"+x.name+"'> - </button><br>" ;
    
    });
console.log(code);
    shoppinglist.innerHTML=code;
    calctotal();
    document.getElementById('cart').className="cartdisp";
}

function calctotal()
{
    var total=0;
    cartlist.forEach(function(x){
        total+=x.price*x.count;
    })
    document.getElementById("total").innerText="Total = ₹ "+total;
}
function add(fruit)
{
  var name= fruit.getAttribute("data-name");
  var price=fruit.getAttribute("data-price")
    addtocart(name,price,1);
  
}

function del(fruit)
{
  var name= fruit.getAttribute("data-name");
    for(var i in cartlist )
    {
        if(name==cartlist[i].name)
        {
            delete cartlist[i];
            dispcart();
            return;
        }
    }
  
}
var timer;
timer=setInterval(changebgd,1500);
function changebgd(){
    r=Math.random()*256;
    g=Math.random()*256;
    b=Math.random()*256;
    r1=Math.random()*256;
    g1=Math.random()*256;
    b1=Math.random()*256;
    var rgb1="rgb("+r1+","+g1+","+b1+")" ;
    
    var rgb="rgb("+r+","+g+","+b+")" ;
    document.getElementById("body").style.background="linear-gradient(to bottom,"+ rgb +"0%, "+rgb1 +"100%)";
    document.getElementById("hd").style.color=rgb;


}
