
// const tinderUser=new Object();
// const tinderUser ={}
// tinderUser.id="123abc";
// tinderUser.name="same"
// tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    email:"some@email.com",
    fullname:{
        userFullname:{
            firstname:"abhi",
            lastname:"kumar"
        }
    }
}

// console.log(regularUser.fullname.userFullname.firstname);


const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"a",
    4:"b"
}

const obj4={
    5:"a",
    6:"b"
}

// const obj3 = {obj1,obj2}
// const obj3 =Object.assign({},obj1,obj2,obj4)
// const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);



const users =[
    {
        id:"1",
        email:"abhi@123"
    },
    {
        id:"2",
        email:"abhi@183"
    },
    {
        id:"3",
        email:"abhi@143"
    },
    {
        id:"4",
        email:"abhi@113"
    },
    {
        id:"5",
        email:"abhi@103"
    }
]


// console.log(users[1].email);

// console.log(tinderUser);
// console.log(Object.values(tinderUser));
// console.log(Object.keys(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLogged"));





//! Object destructing

// const Course ={
//     coursename:"js in hindi",
//     price:"999",
//     courseInstructor:"abhi"
// }

// Course.courseInstructor

const {courseInstructor:instructor} =Course;
console.log(instructor);


//?json object
// {
//     "name":"abhi",
//     "coursename":"js",
//     "price":200
// }


[
    {

    },

    {

    }
]