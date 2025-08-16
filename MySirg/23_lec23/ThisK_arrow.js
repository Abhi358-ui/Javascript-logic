// let a=10;
// console.log(this.a);

// function f1() {
//     // "use strict" // strict mode me this undefined deta ha
//     b=10;
//     console.log(this.b); // global object
// }

// f1();





// const obj ={
//     name:"abhishek",
//     age:15,
//     sayHii:function(){
//         console.log("i am "+this.name);
//     }
// }

// obj.sayHii();




// let obj2={
//     name:"navin",

// };
// obj2.sayHii=obj.sayHii;
// obj2.sayHii(); // dono me name ka matlab alag ha 
// obj.sayHii();








//? constructor funcrion

// function Book(id,title,price)
// {
//     this.id=id;
//     this.title=title;
//     this.price=price;
//     console.log(this);
// }

// const b1 = new Book(1,"js",233);



//? event handling

// const bt = document.getElementById('btn');
// bt.addEventListener('click',function(){
//     console.log(this); // ye this usko represent kr raha ha jo isko call kr raha ha aur isko bt object call kr raha ha 
// });











//? arrow function me this nhi hota ha function context me but scope chaining ke wajh se outer scope ko represent karta ha


// function f1() {
//     let a=10;
//     const newArrow=()=> {
//         // console.log(a);
//         console.log(this);// ye f1 ke this ko refer krega
//     }
//     newArrow();
// }

// f1()





// const fun = () => {
//     console.log(this);
// };

// fun();











const obj3 ={
    a:10,
    f1:function(){
        console.log(this.a); // this==obj3
        setTimeout(function(){
            console.log(this); // this==window
        },2000);
    },

    f2:function(){
        console.log(this.a); // this == obj3
        setTimeout(()=>{
            console.log(this); // this == obj3
        },2000);
    }
}

obj3.f1();
obj3.f2();

// aap arrow function ko as a constructor function use nhi kr sakte

// const f1=()=>{}; // error 
// const obj = new f1();


