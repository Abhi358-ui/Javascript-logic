
//? JSON vs JS Object



// // simple js object

// const user = {
//   name: "Abhishek",
//   age:20,
//   address:"Bihar",
//   c:undefined, // ignore it because JSON does not understand the undefined
// }


// // convert the js object into JSON format

// const jsonFormat = JSON.stringify(user);
// console.log(jsonFormat);




//? JSON DATA

const jsonData = `{
  "name":"Abhishek",
  "age":20,
  "address":"Bihar"
}`


// convert the json into JSobject

const user = JSON.parse(jsonData);
console.log(user);