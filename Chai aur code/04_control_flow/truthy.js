
//! Truthy and false

const userEmail = "h@gmail.com"

if (userEmail) {
    console.log("got user email");

}
else {
    console.log("dont have user email");

}



//*False values

/*

false
0
-0
BigInt 0n
""
null
undefined
NaN
*/


//* Truthy values

/*

true
"0"
`false`
" "
[]
{}
function(){}



*/

//? empty array ki checking
const arr =[]
if(arr.length===0)
{
    console.log("Array is empty");
    
}


//? empty object ki checking
const obj ={}
if(Object.keys(obj))
{
    console.log("Objext is empty");
    
}





//! Nullish Coalesing operator(??) null undefined

let bal1;
// bal1=5 ?? 10;
// bal1=null ?? 10;
// bal1= undefined ?? 15;
bal1 = null ?? 10 ?? 104;

console.log(bal1);




//! Terniary operator

// condition ? true: false;

const icePrice=10;
icePrice>100?console.log("hii"):console.log("hello");






