
const descipter=Object.getOwnPropertyDescriptor(Math,"PI")

console.log(descipter);


// console.log(Math.PI);
// Math.PI=33;
// console.log(Math.PI);


const chai={
    name:"masala",
    price:22,
    isAvailable:true,

    orderChai:function(){
        console.log("chai nhi bni");
        
    }
}

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// Object.defineProperty(chai,'name',{writable:false
// })
// console.log(Object.getOwnPropertyDescriptor(chai,"name"));


for (const [key,value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
    
}