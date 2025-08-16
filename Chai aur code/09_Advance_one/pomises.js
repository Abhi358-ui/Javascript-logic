
// const promiseOne=new Promise(function(resolve,reject){
//     // Do an asyn task
//     //Db calls , network calls
//     setTimeout(function(){
//         console.log("async task is complete");
//         resolve();
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("promised consumed");
    
// })





new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
        
    },1000)
}).then(function(){
    console.log("async 2 is resolved");
    
})







const promiseThree= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve(
            {
                username:"abhi",
                email:"abhi@gmail.com"
            }
        )
    },1000)
})


promiseThree.then(function(user){
    console.log(user);
    
})












const promiseFour = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error=true;
        if(!error){
            resolve({
                username:"abhi",
                passwd:"123"
            })
        }
        else{
            reject('ERROR : something went wrong')
        }
    }, 1000);
})


 promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((userName)=>{
    console.log(userName);
    
}).catch((err)=>{
    console.log(err);
    
}).finally(()=> console.log("the promise is resolve either reject")
)









const promiseFive = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error=true;
        if(!error){
            resolve({
                username:"js",
                passwd:"123"
            })
        }
        else{
            reject('ERROR : JS went wrong')
        }
    }, 1000);
});

async function consumePromiseFive(){
   try{
    const response= await promiseFive
   console.log(response);
   }catch(error){
    console.log(error);
    
   }
   
}

consumePromiseFive()



























// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');

//         const data = await response.json();
//         console.log(data);
        

//     }
//     catch(error){
//         console.log("E: ",error);
        
//     }
// }

// getAllUsers()


//! upar wala dusre tarike se 

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
}).then((data) =>{
    console.log(data);
    
}).catch((error)=>{
    console.log(error);
    
})