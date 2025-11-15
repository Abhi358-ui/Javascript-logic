
//? callback function is the function that pass the arqument in the another function

function greet() {
  console.log("Hello jii kaise ha");
}

function dance() {
  console.log("i am danceing");
}

function meet(callback) {
  console.log("I am going to meet someone");
  callback();
  console.log("i have finished the all the code !");
}

meet(greet);
meet(dance);




//? callback is using in the sorting the array 

let arr = [23,25,7,52,353,23];

// sort the array
arr.sort((a,b)=>a-b); // assending order 
arr.sort((a,b)=>b-a); // desending order 
console.log(arr);

