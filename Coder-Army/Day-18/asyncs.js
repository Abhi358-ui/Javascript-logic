
// zomato order using the callback hell we are seeing the same code using the Promise

//? Order information
const orderData = {
  orderId: 1232,
  food:["pizza","coak","icecream"],
  cost:400,
  customer_name:"abhishek",
  customer_location:"Jaipur",
  restro_address:"Delhi"
};




function placeOrder(orderData, callback) {

  console.log(`Payment ${orderData.cost} is in progress`);

  setTimeout(() => {
    console.log("you order get placed");
    orderData.status = true;
    callback(orderData);
  },3000);
}




function prepareOrder(orderData, callback) {
  console.log("your food prepareing is start" + orderData.food);

  setTimeout(() => {
    console.log("your food is prepared");
    callback();
  },3000)
}




function pickupOrder(callback) {
  console.log("Courier boy is on the way to pickup order");

  setTimeout(() => {
    console.log("the food is now pickuped")
    callback();
  },3000);
}





function deliverOrder() {
  console.log("i am on the way to deliver ordered");

  setTimeout(() => {
    console.log("order deliver successfully");
  },3000)
}





//? it is called the callback hell
//? it is combination of the multiple function call at the sane tine and the multiple callback function

placeOrder(orderData, (orderData) => {
  prepareOrder(orderData,() => {
    pickupOrder(() => {
      deliverOrder();
    });
  });
});
// prepareOrder(); // it is a wrong method