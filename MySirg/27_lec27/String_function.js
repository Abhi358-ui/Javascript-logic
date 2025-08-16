
// String Methods

let s1 = "Abheishek"

// console.log(s1.length); // String me total character batata ha

// console.log(s1.indexOf('e'));
// console.log(s1.lastIndexOf('e'));
// console.log(s1.indexOf('w')); // -1 reyurn krega agr exist nhi karta ha to


// console.log(s1.indexOf('e',4)); // ye 4 index ke baad check krega

// console.log(s1.indexOf('bh'));



// console.log(s1.includes('sh')); // agr wo character exist karta ha string me to return true krega ye case sensitive ha isliye S aur s dono differnce ha


// console.log(s1.startsWith('Ab')); // agr wo Ab se start hoga to true dega otherwise false

// console.log(s1.endsWith("dd"));



// console.log(s1.slice(1,5)); // ye index 1 se 5 tak ka string dega index 5 add nhi hoga

// console.log(s1.slice(2)); // 2 se pura le lega
// console.log(s1.slice(-5,-1)); // slice negative indexing support karta ha


// console.log(s1.substring(1,3));  // ye negative ko support nhi karta ha 
// console.log(s1.substring(5,3));

// console.log(s1.substr(3,4)); // index 3 se start kijiye aur waha se 4 character lijiye




// console.log(s1.replace('Ab','ab')); // ye ek nya string return kiya jisme replace ha
// console.log(s1);

// console.log(s1.replaceAll('e','E')); // ise sabhi occurence change hote ha

// console.log(s1.toLowerCase());
// console.log(s1.toUpperCase());



// let s2 = "      New Txt     "
// console.log(s2);
// console.log(s2.trim()); // ye suru aur last ke extra space ko hata deta ha

// console.log(s2.trimStart());
// console.log(s2.trimEnd());




// let s3 = "Hi this is a man"
// let a = s3.split(' ') // ye string ko paas kiye gye value pr to deta ha 
// let b = s3.split('')
// console.log(b);
// console.log(a);



let s2 ="Private"
let s3 ="Limited"

let s4 = s1.concat(" "+s2+" "+s3)
console.log(s4);