
// promise is the way to handle async tasks
// promise states --> fullfilled , pending, rejected



// promise creation 

function someApi() {
    let p1 = new Promise((res,rej)=>{
    setTimeout(()=>{
         console.log("hello");
         let rand = Math.floor(Math.random()*10)
            if(rand>5){
                res(rand);
            }
            else{
                rej(rand);
            }
    },3000)
    });

    return p1;
}


// consumer code
let promises = someApi();

// if the promise fullfilled then execute the beolow code
promises.then((rand)=>{
    console.log("promise fullfilled"+rand);
},(rand)=>{
    console.log("promise rejected"+rand);
})

// if the promised rejected
promises.catch(()=>{
    console.log("in cathch error");
})
