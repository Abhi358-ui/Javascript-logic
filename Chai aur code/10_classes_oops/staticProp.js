
class User {
    constructor(username)
    {
        this.username=username;
    }

    logMe(){
        console.log(`Usrname ${this.username}`);
        
    }

    //? ab ye function koi dusra use nhi kr sAKTA 
    static createId(){
        return `123`
    }
}


const abhi = new User("Abhishek")
// console.log(abhi.createId());


class Teacher extends User{

    constructor(username,email)
    {
        super(username)
        this.email=email
    }
}

const Iphone = new Teacher("iphone","iphonw@gmial")
Iphone.logMe(Iphone.createId())