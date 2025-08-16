
//ES6

// class User {
//     constructor(username,email,passwd){
//         this.username=username;
//         this.email=email;
//         this.passwd=passwd;

        

//     }

//     encryptPassword(){
//         return `${this.passwd}abc`
//     }

//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }

// }


// const chai = new User("chai","abc@gmail.com","123")
// console.log(chai.encryptPassword());
// console.log(chai.changeUserName());
















// behind the screen

function User (username,email,passwd){
    this.username=username;
    this.email=email;
    this.passwd=passwd;

}

User.prototype.encryptPassword = function(){
    return `${this.passwd}abc`
}

User.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea","tea@gmail.com","1221221")


console.log(tea.encryptPassword());
console.log(tea.changeUserName());


