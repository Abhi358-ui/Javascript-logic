
// Array function

const arr=[11,21,33,74,84,74];

// console.log(arr);
// arr.push(10);
// arr.unshift(20)
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.shift();
// console.log(arr);



// kis index se chalu karna ha uske baad kitna delete karna ha uske baad kitna add karna ha 
// arr.splice(1,0,222,333);
// console.log(arr);

// index 1 se 1 value delete karna ha 
// console.log(arr);
// arr.splice(1,1);

// arr.splice(0,1,122,212,321) // delete 2 value from 0 and add three values 122 212 321

// console.log(arr);


// array ke sabhi element one by one access hota ha
// isme pahle array ke index uske baad element aur uske bad array

arr.forEach((element,index,a)=>{
    //console.log(index,element,a);
    arr[index]=element+2;
    console.log();
});

console.log(arr);

