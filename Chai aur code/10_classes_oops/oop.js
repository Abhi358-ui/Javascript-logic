
const user = {
    username:"abhi",
    loginCount:8,
    signedIn:true,

    getUserDetails:function(){
       // console.log("got user details from database");
    //    console.log(`Username : ${this.username}`);
    console.log(this);
    
       
        
    }
}



console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


// const promiseOne = new Promise()















// function User(username,loginCount,isLogedIn){
//     this.username=username;
//     this.loginCount=loginCount;
//     this.isLogedIn=isLogedIn;
//     this.greeting=function(){
//         console.log(`Welcome : ${this.username}`);
        
//     }

//     // return this // iske likhne se koi fyada nhi ha 
// }

// const userOne = new User("abhi",12,true)
// const userTwo = new User("shek",11,false)
// console.log(userTwo.constructor);


// // new keyword ka use krne se nya object bnta hahr baar




