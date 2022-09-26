//// PRODUCT ADD TO CART
// Add to cart to local storage
//  Step 1: First check 'shopping-cart'
//Step 2:If 'shopping-cart' found then parse them
        // 2.1 If Not, then initialized empty object 
// Step 3. if 'shopping-cart' found, then check for quantity
        // 3.1 If quantity found for a specific item, then add +1 into their quantity and assing that value
        // 3.2 If no quantity found, then assign 1 into their quantity
//Finally 4. make stringify and add "shopping-cart" and their value to the LS

import { Products } from "../Products/Products";


function addToCart(title){
  
    let shoppingCart;
    // Step 1: First check 'shopping-cart' 
    const isShoppingCart=localStorage.getItem('shopping-cart');
    
    if(isShoppingCart)
    //Step 2:If 'shopping-cart' found then parse them
    {   shoppingCart=JSON.parse(isShoppingCart);
    

    }
    else
    {     // 2.1 If Not, then initialized empty object 
        shoppingCart={};
        
    }
    //// ADD PRODUCT TO SHOPPING CART
    // Step 3. if 'shopping-cart' found, then check for quantity
    const quantity=shoppingCart[title];
    if(quantity)
    {
        // 3.1 If quantity found for a specific item, then add +1 into their quantity and assing that value
        const newQuantity=quantity+1;
        shoppingCart[title]=newQuantity;

    }
    else
    {
        // 3.2 If no quantity found, then assign 1 into their quantity
        shoppingCart[title]=1;
    }

//Finally 4. make stringify and add "shopping-cart" and their value to the LS

    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart));
}
///REMOVE ITEM FROM CART
function removeFromCart(title){
    let shoppingCart;
    const isShoppingCart=localStorage.getItem('shopping-cart');
    if(isShoppingCart)
    {
        shoppingCart=JSON.parse(isShoppingCart);
        const quantity=shoppingCart[title];
        if(quantity)
        {
            delete shoppingCart[title];
            
        }
        else{
            console.log("Your Selected Item not found");
        }
        localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart)); 


    }
    else
    {
        console.log("You didn't create any cart");
    }
}

///CALCULATING ALL PRODUCTS PRICE THROUGH ARRAY REDUCE

function getTotal(products){
    const Total=(previous,current)=>previous+current.price;
    
const total=products.reduce(Total,0);
return total.toFixed(2);
}




export {addToCart,removeFromCart,getTotal}