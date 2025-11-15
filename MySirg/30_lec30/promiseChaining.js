// ===========================
// 📘 Example 1
// ===========================

// // promise creation

// function someApi1() {
//     let p1 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//          console.log("Meain promise 1 hu");
//          let rand = Math.floor(Math.random()*10)
//             if(rand>5){
//                 res(rand);
//             }
//             else{
//                 rej(rand);
//             }
//     },5000)
//     });

//     return p1;
// }

// function someApi2() {
//     let p1 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//          console.log("Mai promise 2 hu");
//          let rand = Math.floor(Math.random()*10)
//             if(rand>5){
//                 res(rand);
//             }
//             else{
//                 rej(rand);
//             }
//     },3000)
//     });

//     return p1;
// }

// // consumer code
// let promises = someApi1();

// // if the promise fullfilled then execute the beolow code
// promises.then((rand)=>{
//     console.log("promise fullfilled"+rand);
// },(rand)=>{
//     console.log("promise rejected"+rand);
// })

// let promise2 = someApi2();
// // if the promise fullfilled then execute the beolow code
// promise2.then((rand)=>{
//     console.log("promise fullfilled"+rand);
// },(rand)=>{
//     console.log("promise rejected"+rand);
// })

















// ===========================
// 📘 example 2
// ===========================

// promise creation

function someApi1() {
  let p1 = new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Meain promise 1 hu");
      let rand = Math.floor(Math.random() * 10);
      if (rand > 5) {
        res(rand);
      } else {
        rej(rand);
      }
    }, 5000);
  });

  return p1;
}

function someApi2() {
  let p1 = new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Mai promise 2 hu");
      let rand = Math.floor(Math.random() * 10);
      if (rand > 5) {
        res(rand);
      } else {
        rej(rand);
      }
    }, 3000);
  });

  return p1;
}

// consumer code

// if the promise fullfilled then execute the beolow code
someApi1().then(
  (rand) => {
    console.log("promise fullfilled" + rand);

    //if the someApi1 is fullfilled then executing the second api

    someApi2().then(
      (rand) => {
        console.log("promise fullfilled" + rand);
      },
      (rand) => {
        console.log("promise rejected" + rand);
      }
    );
  },
  (rand) => {
    console.log("promise rejected" + rand);
  }
);



// When one promise obtained the data then called the seconds promise and when second is done then called the third promise it is called promise chaining