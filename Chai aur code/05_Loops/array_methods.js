

//! for each in array

// const coding = [12,33,43,555,66]

// //? for each loop koi value return nhi karta 
// const values = coding.forEach((item)=>{
//     // console.log(item);
//     return item;
    
// })


// console.log(values);













const muNym = [54,74,78,54,96,85,74]
// const newNum = muNym.filter((num) => num>60 );
//? scope chalu krne ke baad return karna parta ha manaually
// const newNum= muNym.filter((num)=>{
//     return num>60;
// })

const newNum=[]
muNym.forEach((num)=>{
    if(num>60){
        newNum.push(num);
    }
})

// console.log(newNum);


















const myBooks =[
    {
        title:"Book one",
        genre:"Fiction",
        publish:1982
    },
    {
        title:"Book two",
        genre:"Non Fiction",
        publish:1982
    },
    {
        title:"Book three",
        genre:"History",
        publish:1982
    },
    {
        title:"Book four",
        genre:"Biology",
        publish:1982
    },
    {
        title:"Book five",
        genre:"Science",
        publish:1987
    },
    {
        title:"Book six",
        genre:"Fiction",
        publish:1982
    },
    {
        title:"Book seven",
        genre:"Fiction",
        publish:1983
    },
];

// const userBook = myBooks.filter((bk) => {
//     return bk.genre==="Fiction"
// })

const userBook = myBooks.filter((bk) => {
    return bk.publish===1982
})

console.log(userBook);


