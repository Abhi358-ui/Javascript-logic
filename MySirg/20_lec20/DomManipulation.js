
// event matlab user ke interactions se kuch hona use event kahte ha 




let a = document.getElementsByTagName("button");

a[0].addEventListener('click',f1);

function f1() { // event handler
    document.body.style.backgroundColor = "#333";
}

a[1].addEventListener('click',f2);

function f2() {
    document.body.style.backgroundColor="white";
}

a[2].addEventListener('click',f3);

function f3() {
    document.body.style.backgroundColor="yellow";
}