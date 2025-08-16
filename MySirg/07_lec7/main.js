
function f1()
{
    console.log("abhishek");
}

f1.d=111;
console.log(f1.d); // ye object ha kyuki object ke hi properties hota ga 

console.log(f1 instanceof Object); // isse bhi pata kiye jate ha ki object ha ki kya ha 

console.log(typeof f1);
console.log(f1);












// function property

function f2(){
    f2.count++;
}

f2.count=10;
f2();
f2();
console.log(f2.count);


f2.showCount=function(){
    console.log(f2.count);

}

console.log(f2.showCount);
