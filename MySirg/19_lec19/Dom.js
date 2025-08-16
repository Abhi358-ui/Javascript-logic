
// const a = document.getElementById("head1");

// const b = document.getElementsByTagName("h1");

// // console.log(b[1]); // array ki tarah use kr sakte ha aap
// // console.log(b[0]);
// // console.log(a);

// //* ekdum css ki tarah select karna ha 

// const k = document.querySelector("#head1"); // ye hamesha ek object return karta ha jo pahla ha use ye select kr leta ha 
// console.log(k);

// const qu = document.querySelectorAll("h1");
// console.log(qu);

// //* differnce between innertext, innerhtml and textContent
// console.log(a.innerHTML); // isme inner html and tag bhi aa jata ha  aur ye space bhi count karta ha 
// console.log(a.innerText); // ye space ko remove kr deta ha 
// console.log(a.textContent); // ye space bhi consume karta ha

// //* change the text of the html tag

// a.innerText="hiii";
// b[1].innerHTML="inner HTML";

// //* css ke sath changing

// a.style.color="green";

// document.body.style.backgroundColor="black";
// document.body.style.color="white";



// const c = document.getElementsByClassName("newc");
// // console.log(c);
// c[0].textContent="new p";





//! New element create karna 

let a = document.createElement("h2");
a.innerText="new heading bnaye ha ";

document.body.appendChild(a);



//! kisi element ko remove karna

let b = document.querySelector("#head1");
b.remove();