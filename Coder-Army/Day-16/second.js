// let button1 = document.getElementById("b1");
// let button2 = document.getElementById("b2");
// let button3 = document.getElementById("b3");
// let button4 = document.getElementById("b4");
// let button5 = document.getElementById("b5");

// button1.addEventListener("click", () => {
//   document.body.style.backgroundColor = "red";
// });

// button2.addEventListener("click", () => {
//   document.body.style.backgroundColor = "yellow";
// });

// button3.addEventListener("click", () => {
//   document.body.style.backgroundColor = "green";
// });

// button4.addEventListener("click", () => {
//   document.body.style.backgroundColor = "purple";
// });

// button5.addEventListener("click", () => {
//   document.body.style.backgroundColor = "pink";
// });



//! optimized sollution

let parent = document.querySelector('.container');

parent.addEventListener('click',(e) => {
  const child = e.target;
  document.body.style.backgroundColor = child.id;
})