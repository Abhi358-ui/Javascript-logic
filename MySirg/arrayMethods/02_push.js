
//? push is used to add the item at the last the array 

// let arr = [12,33,11,22,33]
// arr.push(900)
// arr.push(12,21)
// console.log(arr);








//? pop is used to remove the last item in the array and it is only delete last element

// let arr = [12,22,32,34,56,7]
// arr.pop();
// console.log(arr.pop()); // return the removed element
// console.log(arr);








//? shift is used to remove the first element of the array

// let arr = [12,22,32,78,85]
// arr.shift();
// console.log(arr);



//? unshift is used to add a item in the start of the array

// let arr = [22,3,4,1]
// let arr2 = ['ww','rr','wwq']
// arr.unshift(123)
// arr.unshift(arr2)
// console.log(arr);






//? concat is used to add to array in one array and always return new array

// let arr = [3,2,1]
// let arr2 = ['ww','ee']
// let new_ar = arr.concat(arr2)
// console.log(new_ar);





// join is used to change the array element into string if you are not assign the seperator then assign the comma

// let arr = ['a','b','h','i']
// let ans = arr.join('|')
// console.log(ans);








// isArray is used to check a array is array or not and return an boolean value

// let arr = [3,4,2,2];
// console.log(Array.isArray(arr));
// let as = 0;
// console.log(Array.isArray(as));







// foreach is used to iterate over all element and apply an function

// let arr1 = [1,2,3,4,5]
// let ans = arr1.forEach((v,i,ar)=>{
//     arr1[i]=v*2
// });

// console.log(arr1);






// map is used to iterate over a array and all result are store in an array and return a new value

// let arr = [1,2,3,4,5,55]

// let result = arr.map((v)=>{
//    return v+2
// })
// console.log(result);







// sort is used to sort the array element alphabatically

// let arr = ['aq','e','b','ap']
// arr.sort();
// console.log(arr);

// let arr1 = [2,33,42,21,34,55,19,190]
// console.log(arr1.sort((a,b)=> a-b));







// reverse method is used to revrese the array of element and changes are reflactin the same array

// let arr = [11,21,24,56,76]
// arr.reverse();
// console.log(arr);





// const variable cannot changed
// const a=[11,22,33,44]
// a='ss'
// console.log(a);





// slice method is used to take the piece of the array and always return new array
// let arr = [10,22,12,33];
// let ans = arr.slice(1,2) // last index is exclueded

// console.log(ans);







// splice is also return the piece of array but changes are repflacted in the same array and working as the alternative of pop and push

// let arr=[1,2,4,6,1,2]
// let ans = arr.splice(0,2) // matlab 0 se leke 2 element
// console.log(ans);
// console.log(arr);





// indexOf() is used to check the element index and if element is not exist then return -1

// let arr = [3,2,1,4,5]
// let ans = arr.indexOf(4)
// let ans2 = arr.indexOf(4,4) // finding 4 element and starting from 4 index
// console.log(ans2);
// console.log(ans);






// lastIndexOf() is used to find a index of the element but the finding a element is starting from the end

// let arr = [1,2,3,42,2,1]
// console.log(arr.lastIndexOf(2)); // finding the element 2 but starting from the last









// keys() is a method that is used to all the keys are store in an array and return.

// let arr = [1,2,3,11,23,12]
// const c =arr.keys(); // return an iterator object

// for(let x of c)
// {
//     console.log(x);
// }













// values() just like a keys() but now it return values iterator

// let arr = [12,11,21,111,234]
// let c = arr.values();
// for(let i of c)
// {
//     console.log(i);
// }








// entries() is used to make a array of array value pair 

// let arr = [2,3,8,5,7]
// let c = arr.entries();
// for(let [x,y] of c)
// {
//     console.log(x,y);
// }









// every() is used to iterate over all array elelemt and take a callback function if callback function satisfy all value then return true;

// let arr = [12,332,121,1112,22]

// let ans = arr.every((v)=>{
//    return v%2==0;
// })
// console.log(ans);





// some() is a function like every but in some() one condition are satisfy then return true;

// let arr = [11,22,33,12,2399]
// let ans = arr.some((v)=>{
//     return v>300;
// })

// console.log(ans);






// filter() apply a loop for all element and which element satisfy the condition then return array

// let arr = [1,2,3,-2,-3,-66]
// let ans = arr.filter((v)=>{
//     return v<0;
// })
// console.log(ans);







// find() method is used to find the elemet if the first element satisfy the condition then return that elelmet

// let arr=[11,2,12,33,44]
// let ans = arr.find((v)=>{
//     return v>40;
// })
// console.log(ans);





// findIndex() is just like a find() method if the specified condition satisfied which element that element are returned

// let arr =[12,2,33,124,8,74]
// const res = arr.findIndex((v)=>{
//     return v>100;
// })
// console.log(res);






// includes() method check if the desire element is present then return true

// let arr = [2,3,4,6,7]
// let ans = arr.includes(6)
// console.log(ans);





// toString() method is used to convert a array into string

// let arr = [1,2,3,4,1]
// let to_str=arr.toString();
// console.log(typeof to_str);
// console.log(to_str);







// from() is a method of Array class and convert a string into array

// let arr = Array.from('hello')
// console.log(arr);














