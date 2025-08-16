function setUserName (username){
    //complex db call
    this.username=username;
    console.log("called");
    
}

function createUser (username,email,password){
    //? yaha pr createUser apna this pass kr raha ha setUsername ko 
    setUserName.call(this,username)

    this.email=email;
    this.password=password;
}

const chai = new createUser("chai","chai@gmail","123")
console.log(chai);
