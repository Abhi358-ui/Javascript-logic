
//! JAvascript execution context

//? 1. Global execution context
//? 2. Function execution context
//? 3. Eval execution context

//* Code execute kaise hota ha

//?1. Memory creation phase
//?2. Execution phase



let var1 = 10
let var2 = 20
function addNum(num1 ,num2)
{
    let total = num1+num2
    return total;
}

let result1 = addNum(var1,var2)
let result2 = addNum(44,74)


//! phases of execution of above code 

//* 1. Global execution   ==> this

//* 2. Memory phase ==> 
//  A. val1 --undefined 
//  B. val2 --undefined
//  C. addNum -- defination
//  D. result1 = undefined
//  E. result2 -- undefined

//* Execution phassed

/*

var1 <-- 10
var2 <-- 22
addNum ---->  yaha ek box banta ha jiske andar function ke liye alag alag se memory create hoga jise local var bhi kahte ha 

Execution context ==> ab function ke var ha usme data assign hote ha is phase me 




*/ 





//! Call stack

//? ==> ye ek stack ki tarah hota ha jisme ek ek krke sabhi function jate ha aaur wahi pr execute hota ha aur excuted function bahar nikal jate ha 