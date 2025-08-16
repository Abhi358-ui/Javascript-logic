

const num = [1,2,23]

// const myTotal = num.reduce(function(acc,curr){
//     console.log(`acc ${acc} and current value ${curr}`);
    
//     return acc+curr
// },3)

const myTotal = num.reduce( (acc,curr)=>{
    return acc+curr
},0)

// console.log(myTotal);














const shopingCart = [
    {
        itemName:"js",
        price:44
    },
    {
        itemName:"cpp",
        price:44
    },
    {
        itemName:"c",
        price:100
    },
    {
        itemName:"java",
        price:200
    }
];

const price = shopingCart.reduce((acc,item)=>{
    return acc+item.price
},0);

console.log(price);

