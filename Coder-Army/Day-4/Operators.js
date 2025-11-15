// ===========================
// 📘 Operator
// ===========================

//? Arithmetic 

// console.log(2+5);
// console.log(2-5);
// console.log(2*5);
// console.log(6/2);
// console.log(5%2);
// // Reminder
// console.log(5**3);





//? Assignment operator

// let x = 20;
// let y = 10;
// x = x+y;
// x = x-y;
// x = x*y;
// x+=y; // inhe compound assignment operator kahte ha 
// x = x+y;
// x%=y;
// console.log(x);



//? comparison operator
// let x = 20;
// let y= 10;

// console.log(x>y);
// console.log(x>=y);
// console.log(x<y);
// console.log(x<=y);
// console.log(x==y);
// console.log(x===y);






//? type check(dono same type ke hone chaiye ===, uske baad wo comparison) agr type hi alg ha to tabhi hi error de deta ha 
//? number and string compare(string convert number) pahle string ko number me convert kr diya jata ha

// let z = "120";
// let a = Number(z);
// console.log(a, typeof(a));





//? NaN: Not a number(Type of it is number)
//? jab koi string me number mixed rahta ha to wo ek invalid number me convert nhi hota ha 

// let a = "121ac";
// let b = Number(a);
// console.log(b);
// console.log(typeof b);




//? inhe js me truty falsy values kahte ha 

// let a = true;
// console.log(Number(true)); 
// console.log(Number(false));

// console.log(Number(null)); // 0
// console.log(Number(undefined)); // NaN






//? Number -> String
// let a = 10;
// let b = String(a);

// console.log(b);
// console.log(typeof b);



//? String me badal deta ha 
// console.log(String(undefined));
// console.log(typeof String(undefined));




//? Boolean convert karunga

// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));



//? computer science challenge

// let a = 0.1;
// let b = 0.2;
// let c = a+b;
// console.log(c);




// 1: null is loosely equal to undefined only

// console.log(null==undefined);
// console.log(null===undefined);
// console.log(null==0);
// console.log(null=="");
// console.log(null==false);
// console.log(null==true);



// >,<,>=,<= (null --> number, undefined --> NaN)

// console.log(null>=0);
// console.log(null<=0);
// console.log(null>0);
// console.log(null<0);
// console.log(null>=undefined);
// console.log(undefined>=0);


//? kyuki pahle first compare krega uske baad uske baad second 
// console.log("Rohit">"Rahit");


//? kyuki true equal hota ha 1 ke
// console.log(10<true);


//? Ek koi bhi type hai, usko agar muje compare karna hai dusre kisi type se
// Dono number mein convert honge

// console.log(null>=""); // 0 >= 0
// console.log(NaN == NaN);







//? loop kaise kaam karte hai

//? for loop

// post increment
// post decrenment : i--

// for(let i = 0; i<10;i++){
//     console.log(i);
// }




//? while loop

// let i = 0;

// while(i<10){
//     console.log(i);
//     i++;
// }





//? do while --> pahle condition check hota ha 

// let i= 0;
// do{
//     console.log(i);
//     i++;
// }while(i<10);






//? if else condition

// let age = 25;

// if(age>=18){
//     console.log("Eligible for vote");
// }
// else{
//     console.log("Not eligible for vote");
// }






//? kid young and old


// let age = 78;

// if(age<18){
//     console.log("Kid");
// }
// else if(age>=60){
//     console.log("Old");
// }
// else{
//     console.log("young");
// }






//! Logical Operator

// logical And&& , || 

// console.log(true&&true);
// console.log(true&&false);
// console.log(false&&false);
// console.log(false&&true);





// console.log(true||true);
// console.log(true||false);
// console.log(false||false);
// console.log(false||true);


//? here a is true and b is false and true and false is false 
// let a = "Rohit";
// let b = "";
// let c = a&&b;
// console.log(c);





//? &&: If first value is false, it will return the first value itself
//? If first value is true, it will return second

// let a = 0;
// let b = 20;
// console.log(a&&b);



//? || logical or
// &&: If first value is true, it will return the first value itself
// If first value is false, it will return second

// let a = 0;
// let b = 20;
// console.log(a||b);



// != ye check kr raha ha ki 5 5 ke barabar nhi ha 
// console.log(5!=5);





// AND: & , | or ternary operator 

// console.log(2&5);