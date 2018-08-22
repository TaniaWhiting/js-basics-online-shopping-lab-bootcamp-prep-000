var cart = [];


function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


 // write your code here
function addToCart(item){
    var product = {};
    product.itemName = item;
    product.itemPrice = Math.floor(100*(Math.random()));
    cart.push({"itemName": product.itemName, "itemPrice": product.itemPrice});
    return (`${item} has been added to your cart.`);
  
}




function viewCart(){
     var viewNames = [];
     var viewPrices = [];
     var viewAll =[];
      if (cart.length === 0){
        return (`Your shopping cart is empty.`)}
    if (cart.length === 1){
       var name = cart[0].itemName;
       var price = cart[0].itemPrice;
       return (`In your cart, you have ${name} at $${price}.`);
       }
     if (cart.length > 1){
        for (var i = 0; i < (cart.length); i++){
             viewNames.push(cart[i].itemName);
             viewPrices.push(cart[i].itemPrice);}
        for ( i =1; i < (cart.length-1); i++){
          var namex = viewNames[i];
          var pricex = viewPrices[i];
          viewAll.push(` ${namex} at $${pricex}`);
           }
         viewAll.unshift(`In your cart, you have ${viewNames[0]} at $${viewPrices[0]}`);
         viewAll.push(` and ${viewNames[viewNames.length-1]} at $${viewPrices[viewPrices.length-1]}.`);
      
        return viewAll.join();
       
   }
}
function total() {
  var carttotal = 0;
  for (var i = 0; i < cart.length; i++){
  carttotal = carttotal + cart[i].itemPrice;}
  return carttotal;
}





function removeFromCart(item){
    for (var i =0;i<cart.length;i++)
    {var match = -1; 
       
       if (item === cart[i].itemName){match = i;} else {return("That item is not in your cart.")}
       if (match>=0){cart.splice(match,1);}
       
}
}

function placeOrder(){}


    
    