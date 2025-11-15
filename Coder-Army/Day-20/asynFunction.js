
//! async await 

//? normat function return krta ha jo hm us function se return karte ha 

// function greet() {
//   return "Greet";
// }

// const response = greet();
// console.log(response);



//? asyn function return karta ha promise aur us promise me rahta ha data jise hm then catch se consume kar sakte ha 

//? async function always return a prmise

// async function greet() {

//   // return "Greet"; // it is the same like down

//   return new Promise((res,rej) => { // it is same like up
//     rej("data")
//   })

// }

// const response = greet();
// // console.log(response);


// //? consume the promise

// response.then((d) => console.log(d))
// .catch((e) => console.log(e));








//? fetching the data using the fetch

// fetch('https://api.github.com/users')
// .then((response) => response.json())
// .then((data) => console.log(data));


//? using the response but abhi aaya hi nhi ha data response

// const response = fetch("https://api.github.com/users");
// const data = response.json();
// console.log(data);




//? using the await keyword
//? But yaha code ruk jata ha 63 line me 

// const response = await fetch("https://api.github.com/users");
// const data = await response.json();
// console.log(data);





//? Most proficient sollution
//? Pahle await ka use bs async function ke andar hi hota ha but 2022 ke baad async function ke bahar bhi use kiya jata ha but ye good way nhi ha kyuki block ho jata ha code

//? in the asyn await function handle the error using the try catch block 

// async function github() {
//   const response = await fetch("https://api.github.com/users");
//   const data = await response.json();
//   console.log(data);
// }

// github();

// console.log("Hii this is the first line") 








// zomato order promblem solving with the async await problem

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


// async function ordering () {
//   try {
//     const res1 = await placeOrder(orderData);
//     const res2 = await prepareOrder(res1);
//     const res3 = await pickupOrder(res2);
//     const res4 = await deliverOrder(res3);

//     console.log(res4);
//   } catch(error) {
//     console.log(error);
//   }
// }

// ordering();







//? Jab hame ek hi function ke andar 2 3 await se data lana ho to wo ruk jata ha ek ke baad hi ek chalu hoga but agr tino task ko parallel me chalana ha to

async function dataFetching() {

  // it is time taking and call if first is completed
  // const comment = await fetch("api.fetchComment")
  // const photo = await fetch("api.fetchPhotos")
  // const chat = await fetch("api.chat")

  const [comment, photos, chat] = await Promise.all([fetch("api.fetchComment"), fetch("api.fetchPhotos"), fetch("api.chat") ]) // it runs all the async task parallel

  // when you need to create connection of multiple db then use this techniques
  // When you need run multiple asynchronous task parallel then also use this method

}