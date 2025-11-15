
//! real use case of the callback function

// if the blinkit placed the order

// blinkit ka function
function blinkitPlacedOrder() {
  console.log("we are starting to packing your order");
}


// zomato ka function
function zomatoOrderPlaced() {
  console.log("we have start to making the food");
}

// main funtion of the payment and all the process 
function payment(amount,callback) {
  console.log(` ${amount} payment has initialized`);
  console.log("payment has received");
  callback();
}


// call the payment method according to the app
payment(122,zomatoOrderPlaced);
payment(200,blinkitPlacedOrder);