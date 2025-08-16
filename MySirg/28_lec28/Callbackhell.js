
// callback function
// function f1(fun){
//     console.log("i am in f1()");
//     fun();
// }

// f1(()=>{
//     console.log("hello");
// })







// setTimeout() -> it is a part of web api 
// async js ka concept isliye laya gya h taki kisi long running task ke liye pure code ko na roka jaye

// setTimeout(()=>{
//     console.log("Arrow function");
// },3000);
// console.log("after the settimeout()");











// callback hell -> jisme multiple function ek line se call ho rahe ha 
f1((v1)=>{
    f2(v1,(v2)=>{
        f3(v2,(v3)=>{
            f4(v3,(v4)=>{
                console.log("all done");
            })
        })
    });
});

// callback hell ko hm name function se bhi call kr sakte ha

function step1(value1){
    f2(value1,step2);
}

function step2(value2){
    f3(value2,step3);
}

function step3(value3){
    f4(value3,()=>{
        console.log("all done");
    })
}
f1(step1);