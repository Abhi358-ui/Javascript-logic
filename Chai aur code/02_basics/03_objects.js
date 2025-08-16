// singleton 

// Object.create

//Object literals

const mySym = Symbol("key1")

const user={
    name: "abhi",
    "full name ":"abhi Kumar",
    [mySym]:"mykey1",
    age:18,
    location:"jaipur",
    email:"abhishek@gmail.com",
    isLogedIn:false,
    lastLogedInDays:["monday","Tuesday"]
}

// console.log(user.email); // method 1
// console.log();
// console.log(user["email"]);
// console.log(user["full name "]);
// console.log(user[mySym]);

// override
user.email="chatgept.com"

// ye chnage nhi hone deta ha 
// Object.freeze(user);

user.greeting=function(){
    console.log("Hello js user");
}

user.greeting2=function(){
    console.log(`Hello user ,${this.name}`);
}

console.log(user.greeting());
console.log(user.greeting2());