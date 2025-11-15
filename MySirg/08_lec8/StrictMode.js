// !strict mode

//? "use strict" // agr aap yelikh dete ha to bina let var const lagye aap var nhi bna sakte

// i=0; // in the strict mode cannot initialize the variable  without any keyword 

// let i=90;
// console.log(i);


//? only use the strict mode in the function 

// function f1(){
//     "use strict"
//     a=0; // in the function we cannot use the without keyword its error 
//     console.log(a);
// }
// f1();







//! question
//? yaha pr 3 3 output aayega kyuki pahle x me 2 ja raha ha phir 3 ja raha ha wo override kar raha ha isliye x ka value 3 3 ho ja raha ha 

function f2(x,x) {
    console.log(x,x);
}
f2(2,3)