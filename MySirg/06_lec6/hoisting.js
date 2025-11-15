//? let aur const se bna variable me agr aap kuch assign nhi krte to js usme kuch nhi dalta jabki var se bna variable me js undefined dal deta ha isliye wo undefined hi print karta ha 

//? hoisting means agr koi variable pahle use ho raha ha aur baad me create ho raha ha to js use us scope me upar declare kr deta ha 


//? function scope variable

// function f1(){
//     var q;  
//     console.log(q);
//     var q=11;
//     console.log(q);  
// }
// f1();

// console.log(q); // q is the function scope variable it cannot be accessed outside the function scope 




//? if we not assign the value it automatically store undefined

// var x; // undefined
// console.log(x);


// let var2; // undefined 
// console.log(var2);

// const var3; // it throw the error because const me declare aur initialisation ek sath hota ha aur ek baar jo store kar diya use change nhi kr sakte ha 



//? hoisting jisse declare kiya hua variable scope me top pr shift ho jata ha 

// f1(); // ye pura aage chal jata ha ise hi hoisting bolte ha 
// function f1(){
//     var q;  
//     console.log(q);
//     var q=11;
//     console.log(q); 
// }




//? function expression : ye hoisting me nhi aata ha 

// f1();
// var f1 = function(){
//     console.log(x);  
//     var x=12;
// }




//? let aur const se bna variable block scope hota ha aur var se bna variable bs function scope hota ha 

// using let keyword

function f1() {
    let x; 
    console.log(x);
}
f1();




