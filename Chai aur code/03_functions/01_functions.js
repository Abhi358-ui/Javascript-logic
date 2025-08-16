

function sayMyName() {
    console.log("A");
    console.log("A");
    console.log("A");
    console.log("A");
    console.log("A");
}


// sayMyName()

//? function with parameter
function add(a, b) {
    console.log(a + b);
}

function add(a, b) {
    // console.log("abhi");
    return a + b;
}

// add(12, "a")
const res = add(12, null)
// console.log("Result :", res);


function loginUserMessage(username = "sam"){
    if(username===undefined)
    {
        console.log("Please enter your username");
        return;
    }
    return `${username} just loged in`
}
// console.log(loginUserMessage("abhi"));
// console.log(loginUserMessage());





// function calcullatePrice(...num1)
// {
//     return num1
// }

// console.log(calcullatePrice(55,20,39,47,78));


function calcullatePrice(var1,var2,...num1)
{
    return num1
}

// console.log(calcullatePrice(55,20,39,47,78));

const user={
    username:"abhi",
    prices:199
}

function handleObj(anyObj)
{
    console.log(`username is ${anyObj.username} and price is ${anyObj.price}`);
}

// handleObj(user)
handleObj({
    username:"abhi",
    price:129
})







const myNewArray =[100,2003,900,784]

function returnSecondArray(getarray)
{
    return getarray[1]
}

console.log(returnSecondArray(myNewArray));
// console.log(returnSecondArray([109,238,212]));

