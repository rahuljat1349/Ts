"use strict";
function hello(myName) {
    return "Hello " + myName;
}
const greet = hello("Rahul");
console.log(greet);
// 
// 
function runAfter1s(fn) {
    setTimeout(() => {
        fn();
    }, 1000);
}
runAfter1s(() => {
    console.log("Hii");
});
