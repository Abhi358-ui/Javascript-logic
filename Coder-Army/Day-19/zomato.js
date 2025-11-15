
// zomato order

//? Order information
const orderData = {
  orderId: 1232,
  food:["pizza","coak","icecream"],
  cost:400,
  customer_name:"abhishek",
  customer_location:"Jaipur",
  restro_address:"Delhi"
};




function placeOrder(orderData) {

  console.log(`Payment ${orderData.cost} is in progress`);
  
  return new Promise((res, rej) => {
    setTimeout(() => {
    console.log("you order get placed");
    orderData.status = true;
    res(orderData);
  },3000);
  })
  
}




function prepareOrder(orderData) {
  console.log("your food prepareing is start " + orderData.food);

 return new Promise((res,rej) => {
   setTimeout(() => {
    console.log("your food is prepared");
    orderData.token = 123;
    res(orderData);
  },3000)
 })
}




function pickupOrder(orderData) {
  console.log("Courier boy is on the way to pickup order " + `token number ${orderData.token}`);

  return new Promise((res,rej) => {
    setTimeout(() => {
    console.log("the food is now pickuped")
    orderData.pickup = true;
    res(orderData);
  },3000);
  })
}





function deliverOrder(orderData) {
  console.log("i am on the way to deliver ordered");

  return new Promise((res,rej) => {
    setTimeout(() => {
    console.log("order deliver successfully");
    orderData.delivery = true;
    res(orderData);
  },3000)
  })
}





// promise chaining it is a simple way to prevent the callback hell

placeOrder(orderData)
.then((orderData) => prepareOrder(orderData))
.then((orderData) => pickupOrder(orderData))
.then((orderData) => deliverOrder(orderData))
.then(() => {
  console.log(orderData);
})
.catch((error) => {
  console.log(error)
})
.finally(() => {
  console.log("i am doing cleanup");
})
