
// var c=100

// jab koi braces loop ya function ke sath aata ha to use scope kahte ha 

let a =290;

if(true)
{
    let a = 10 // block scope level
    // console.log(a);
    const b =20 // block scope level
    // var c=30
}

// console.log(a);
// console.log(b);
// console.log(c);


// for(let i=0; i<Array.length; i++)
// {
//     const ele=arr[i]
// }





//? Video 2

function one()
{
    const customber ="abhi"

    function two()
    {
        const website ="yt"
        // console.log(customber);
    }

    // console.log(website);
    two();
}

one();








if(true)
{
    const username = "abhi"
    if(username === "abhi")
    {
        const website = "yt"
        // console.log(username + website);
    }

    // console.log(website);
}

// console.log(username);









//********Intrsting ************** */

//! it is called hoisiting

console.log(addOne(2)); // pahle define hua

function addOne(val)
{
    return val+1;
}


addTwo(22);

const addTwo=function(val){
    return val+2;
}
