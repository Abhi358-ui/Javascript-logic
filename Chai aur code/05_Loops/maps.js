
const myNum = [10,22,32,43,66,221]

// const newNum=myNum.map((num)=> num+10)

//? chaining
const newNum = myNum.map((num) => num*10 ).map( (num) => num+1).filter((num)=> num >300)
console.log(newNum);
