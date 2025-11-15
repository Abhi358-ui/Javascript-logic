
console.log("Start");

// asynchronus task
const p1 = fetch("https://api.github.com/users");
console.log(p1);

// rejected | fullfilled
const p2 = p1.then((response) => {
  return response.json(); // promise return
})


p2.then((data) => {
  console.log(data);
})


console.log("end");