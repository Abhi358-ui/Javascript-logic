
//? there are 4 way to create variable in javascript
//? keyword is a predefined word
//? js is a dynamiclly type language 
//? ham jiski value change kr sakte ha use variable kahte ha 
//? var keyword se bna var local scope hota ha and without keyword se bna var ka global scope hota ha 


// var a =22;
// let b =222;
// const c = 221;
// d=33;

// console.log(a,b,c,d);





//? without any keyword se bna variable function me global scope hota ha 

// function f1()
// {
//     var x=10; // local variable 
//     y=20; // global variable
//     console.log(x,y);
// }
// f1();
// // console.log(x,y);
// console.log(y); // it can be accessed outside the function




//? javascript me integer nhi hote ha isme numeric value ko number aur alphabetical value ko string kahte ha 

// a=12
// console.log(typeof a);

// a="abhi"
// console.log(typeof a);




//? ======================
//! let and const keyword
// ?======================

//? let aur const 2015 me laya gya

// const w; // error bnane ke sath initial
const s =122;
// s=11; // error kyuki const se bna variable me ek baar value bs store hota ha 








//! Differece between var and let

//? 1. var keyword se bna variable function scope hota ha let keyword se bna variable block scope hota ha 

// function f2(){
//     {
//         var a=12; // it accessed in the entrire function f2
//         let h=122; // it only accessed in the current scope 
//         console.log(a,h);
//     }
//     console.log(a); // accessed in function body
//     console.log(h); // accessed in block scope error
// }

// f2();






//? in var redeclation is not a problem but in let redeclartion is error 


// var x=12;
// var x=122; // it is not a problem
// console.log(x);

// let l=100;
// let l=1000; // it is a problem


//? var keyword se bna variable ka window object me banta ha aur agr koi value assign nhi kiya gya to undefined hota ha jabki let se bna variable script me bnta ha jisme value unavailable btata ha (browser me )

// var dd;
// let kk;
// console.log(dd,kk);


