
//? ek sath sabhi html node par eventListener lagana

let parent = document.getElementById('parent');

// console.log(parent.children);

//? iterate over the html collection

// for (let child of parent.children) {
//   child.addEventListener('click',() => {
//     child.innerText = "I am click"
//   })
// } 



//? it is a optamize approach compare then iterate over the html collection

// parent.addEventListener('click',(e) => {
//   e.target.textContent = 'i am click';
// })



//? how to remove the event listener from the element

function handleClick(e) {
  e.target.textContent = 'i am clicked'
}

parent.addEventListener('click',handleClick);

// remove the listener

parent.removeEventListener('click',handleClick);







//? code for the second code
//? when you want to change the order of the bubling then there is one another arquement that is true or false
//? there us one extra arquement which denote the capture is on or off if the capture is on the bubling order is reversed
//? when the extra arquement is false then the event listener is execute in the bubling phase not the capturing phase

// let grandparent = document.getElementById('grandparent');
// grandparent.addEventListener('click',(e) => {
//   console.log('grandparent is clicked')
//   console.log(e.target); // ye check karta ha kaun sa element ne ye event trigger kiya
// },true);



// let parent = document.getElementById('parent');
// parent.addEventListener('click',() => {
//   console.log('parent is clicked')
// },true);



// let child = document.getElementById('child');
// child.addEventListener('click',(e) => {
//   console.log(e);
//   console.log('child is clicked')
//   e.stopPropagation(); // stop the bubling 
// },true);


// //? event is trigger downt to up

// document.body.addEventListener('click',() => {
//   console.log("body is clicked");
// })