
// for of loop

// ["","",""]
// [{},{},{}]

// const arr =[45,44,78,77]

// for (const i of arr) {
//     // console.log(i);

// }

const greeting = "Hello world"

for (const i of greeting) {
    // console.log(i);

}


// Maps

const map = new Map();
map.set('IN', "India")
map.set('US', "America")
map.set('IN', "India")
map.set('IN', "India")

// console.log(map);

// for (const [key,value] of map) {
//     console.log(key+" "+value);

// }



const obj = {
    game1: "nfs",
    game2: "pbgb"
}

// for (const key of obj) {
// console.log(key);


// }






//! ***************** for in loop ****************************

const myObj = {
    js: "javascript",
    cpp: "CPlusplus",
    rb: "ruby",
    sw: "swift"
}

for (const key in myObj) {
    // console.log(`${key} for ${myObj[key]}`);

}


const arr2 = [11, 22, 33, 44, 55]

// for (const key in arr2) {
//     console.log(arr2[key]);

// }


const map2 = new Map();
map.set('IN', "India")
map.set('US', "America")
map.set('IN', "India")
map.set('IN', "India")


// for (const key in map2) {
//     console.log(key);

// }














//! *********************For each loop ******************************

const brr = [111, 84, 87, 514, 98];

// brr.forEach(function(item){
//     console.log(item);

// })


// brr.forEach((item)=>{
//     console.log(item);

// })






// function printMe(item) {
//     console.log(item);

// }

// brr.forEach(printMe)






// brr.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
    
// })



















const crr = [
    {
        languageName:"c",
        extension:"ccc"
    },
    {
        languageName:"java",
        extension:"j"
    },
    {
        languageName:"python",
        extension:"py"
    }
]


crr.forEach((value,index,arr)=>{
    console.log(value.languageName);
    
})