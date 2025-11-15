
//! String

//? ham js me 3 tarike se string bna sakte ha 

const str1 = "abhi";
const str2 = 'abhishek';
const str3 = `it is the multiline 
string`; // modern way kyuki ham isme multiline string bna sakte ha 

// console.log(str3);


// let name = "abhishek";
// let greet = `hello ${name}`; // concating the string 

// console.log(greet);






//? string methods

// const str = `I am abhishek`;

// console.log(str.length);
// console.log(str[0]);

// str[0] = 'a'; // string immutable hote ha yahi proof ha kyuki iske ek part ka change nhi ho raha ha 
// console.log(str);

// console.log(str.toUpperCase()); // ye real string me change nhi karta ek nya string return karta ha 
// console.log(str.toLowerCase());

// console.log("Hello from" .indexOf("from")); // find the substring and if the ignore the small and cap letter then first changed the string lowercase

// console.log("hii hii" .indexOf('h'));
// console.log("hii hii".lastIndexOf('hii')); // last occur index 




//? slice() it support negative indexing

// let str = "hii from abhishek";
// console.log(str.slice(2,5)); // last is excluded
// console.log(str.slice(-3,-1)); // last is the excluded



//? substring() it does not support negative indexing

// let str = "abhishekkumar";
// console.log(str.substring(1,13)); // last is the excluded



//? concating the string hm multiple string ko add kr sakte ha ek sath 

// const a = "abhi";
// const b = "shek";
// console.log(a + " " + b);

// console.log(12 + "abhishek");
// console.log(12 + "abhi" + 12);
// console.log(12 + 12 + "abhi");




//? replace a specific substring with a string

// const str = "hii hii hii";

// console.log(str.replace("ii","ee")); // bs first ii ko replace kr dega 
// console.log(str.replaceAll("ii","eee")); // ye jaha jaha ii aaya hoga sb jagah change kr dega

// console.log("hii hii".replaceAll("i","ee"));


//? trim() remove the whitespace from the start and end

// const atr = "  abhishek ";
// console.log(atr.trim());
// console.log(atr.trimStart());
// console.log(atr.trimEnd());




//? splict the string using the specific divider

// const str = "abhishek, aman, ajay";
// const arrayName = str.split('a');
// console.log(arrayName);