
//? Create a element using the dom

let newElement = document.createElement('h2');
newElement.innerText = 'Strike is coming soon';



//? set the id  of the element
newElement.id = 'second';


//? get the id using the id selector
let element = document.getElementById('first');

//? set the newElement after the h1 and before the h1
element.after(newElement);




//? create a new element
const newElement2 = document.createElement('h3');
newElement2.innerText = 'diwali aa rahi ha'
newElement2.id = 'third'


// newElement2.className = 'diwali'
//? to assign the multiple classname to one element best practice
newElement2.classList.add('diwali');
newElement2.classList.add('holi');

//? to remove the one class from the element
newElement2.classList.remove('holi');


//? to add some style in the element using the dom manipulation
newElement2.style.backgroundColor = 'purple';
newElement2.style.fontSize = '30px';

//? set the element before the first element
element.before(newElement2);

//? set the own property on the attribute
newElement2.setAttribute('hello','jiii');

//? get the information about the specific attribute
console.log(newElement2.getAttribute('hello'));
console.log(newElement2.getAttribute('id'));


//? list ki kisi element ko delete karne ke liye
newElement2.remove();



console.log(newElement2);