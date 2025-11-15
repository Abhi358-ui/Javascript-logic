
//? function for the onclick event 

// function handleClick() {
//   let temp = document.getElementById('first');
//   temp.innerText = "Strike is coming soon";
// }




//? function for the onclick handle all code inside the js

let ref = document.getElementById('first');


//? when we need the handle multiple element it is not working 
// ref.onclick = function() {
//   ref.innerText = "Strike is coming soon"
// }

// ref.onclick = function() {
//   ref.innerText = "I am the best"
// }



//? handle the event using the eventListener

ref.addEventListener('click', () => {
  ref.innerText = "Strike is coming soon"
})


ref.addEventListener('click', () => {
  ref.style.backgroundColor = 'green';
})


//? dblclick handler for the listener handling

ref.addEventListener('dblclick', () => {
  ref.innerText = "Hello";
})


//? mouseenter event handler

ref.addEventListener('mouseenter',() => {
  ref.style.fontSize = "80px";
})