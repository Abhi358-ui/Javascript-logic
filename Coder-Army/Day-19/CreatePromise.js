
//? Creating the own promise

const p1 = new Promise((res,rej) => {
  rej({
    name:"abhishek",
    age:20
  })
})

//? consume the promise

p1.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log("error");
})
