class User {

    constructor(username)
    {
        this.username=username;
    }

    logMe(){
        console.log(`Usename is : ${this.username}`);
        
    }
}



class Teacher extends User{

    constructor(username,email,passwd)
    {
        super(username);
        this.email=email;
        this.passwd=passwd;

        
    }

    addCourses(){
           console.log(`A new course was added by ${this.username}`);
            
    }

}


const chai = new Teacher("chai","chai@gmail","123")

chai.addCourses()

const masala  = new User("masalachai")
masala.logMe()

console.log(chai === masala);
console.log(chai === Teacher);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);

