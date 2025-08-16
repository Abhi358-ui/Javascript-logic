
const arr = ["abhi","kumar","roy"]
const brr = ["superman","ironman","man"]
const drr = ["superman","ironman","man"]

// arr.push(brr)
// console.log(arr);
// console.log(arr[3][1]); 

//? ye 2 array ko add krke ek nya return karta ha
// const crr=arr.concat(brr)
// console.log(crr);

//? aise spread operator se kitne bhi array ek sath add kiye ja sajte ha 
// const crr = [...arr,...brr,...drr]
// console.log(crr);

//? isse kitne bhi array ke andar kitna bhi nested array ha ye sbko combine kr deta ha ek sath
// const err = [1,3,2,[4,5,6],8,[9,77,[98,74]]]
// const newErr = err.flat(Infinity)
// console.log(newErr);

// console.log(Array.isArray("abhi"));
console.log(Array.from("abhi"));//? isse element ke sabhi data ek array me chale jate ha 
console.log(Array.from({name: "abhi"}));



let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); //? isse aap multiple var ya array ya object ko bhi combine krke ek seprated array bna sakte ha 

