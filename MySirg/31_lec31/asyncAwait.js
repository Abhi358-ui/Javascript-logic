// async function always return promises
// async function jb call hota ha tab promise return kart ha

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

async function f1() {
  console.log("i am a normal function");

  // sync task api calling ek chalega tab dusra chalega
  await someApi1().then(
    (rand) => {
      console.log("promise fullfilled" + rand);
    },
    (rand) => {
      console.log("promise rejected" + rand);
    }
  );
  await someApi2().then(
    (rand) => {
      console.log("promise fullfilled" + rand);
    },
    (rand) => {
      console.log("promise rejected" + rand);
    }
  );
}

let p1 = f1();
// console.log(p1);









// niche jo ha ek function expression ha jo p1 me ja raha ha aur ab ye function p1 se hi call hoga pr aap f2 function ke andar matalb us block ke andar f2 se call krte ha

// let p1 = async function f2() {
//     console.log("i am a function expression");
//     f2();
// }
