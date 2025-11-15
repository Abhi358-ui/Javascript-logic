
//? String ko jodna

let a = "abc";
let b = "def";

console.log(`${a} and ${b}`);
a+=b;
console.log(a);




//? typeof

// let a = "abhi"
// console.log(typeof a);

// let b = [12,33,11];

// console.log(b instanceof Array);
// console.log(Array.isArray(b));



//? in operator

// let p1 ={
//     name:"abhi",
//     age:12
// }

// console.log('age' in p1);





//? delete operator

// let p1 ={
//     name:"abhi",
//     age:12
// }

// console.log(p1);
// delete p1.age;
// console.log(p1);


// let arr  = [12,33,44]
// console.log(arr);
// delete arr[1]
// console.log(arr);

// let brr = [1,,2] // empty array
// console.log(brr);





//? conditional

// let a =3;
// let b = a>0? "positive":"non positive"
// console.log(b);



//? comma operator

// let a = (12,3,44); // jo last ha wo assign ho jayega
// console.log(a);





//? iterable ... spread operator

// let s =[11,22,33,44,221]
// let d = [...s,32,34]
// console.log(d);



// function f1(x,y,z)
// {
//     return (x+y+z)

// }
// let arr = [22,33,44]

// console.log(f1(...arr));




//  let p1 ={
//     name:"abhi",
//     age:12
// }

// let p2 ={
//     ...p1,
//     city:"mumbai"
// }

// console.log(p1);
// console.log(p2);




//? ?? operator / nullish operator

// let a=35;
// let b="kuch bhi"
// let c = a??b; // agr data ha a me to daal do nhi to b wala dal do
// console.log(c);

// if(a===null || a===undefined)
// {
//     c=b;
// }
// else {
//     c=a;
// }





//? optional chaining

let p1 ={
    name:"abhi",
    age:25,
    // address:{
    //     firstLine:"Banda",
    //     secondLine:"Spj",
    //     city:"Delhi",
    //     pin:231233
    // },
    greet(){
        return "hello"
    }
}

console.log(p1.address?.city); // agr nhi ha to error nhi dega

console.log(p1.greet?.());
console.log(p1.sayHello?.());


let arr =null;

console.log(arr?.[1]); // error nhi dega agr nhi ha to bhi
console.log(arr?.[2]); // error nhi dega agr nhi ha to bhi



// end lecture
