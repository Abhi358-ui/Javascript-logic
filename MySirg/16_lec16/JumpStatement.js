

// 1. break statement

//? break ka use tab krte ha jab kisi specific condition pr loop ko rokna ho

// let arr=[12,332,1,233,43];

// let i=0;
// while(i<arr.length)
// {
//     console.log(arr[i]);
//     i++;

//     if(arr[i]%2 != 0)
//     {
//         break;
//     }
// }







// 2. continue keyword

// for (let i=0; i<=10; i++)
// {
//     if(i%2 == 0)
//     {
//         continue;
//     }
//     console.log(i);
// }







// 3. return statement

//? return ka use sirf funcion me hota ha 

function f1() {
    console.log("hello");
    return 5;
    console.log("hii"); // ye kabhi chalega nhi kyuki return ke baad function khatam 
}

console.log(f1());