console.log("One");
setTimeout(() => {
    console.log("Three");
}, 0);
setTimeout(() => {
    console.log("Four");
}, 0);
console.log("Two");

setTimeout(() => {
    console.log(myVar);
}, 0);

let myVar = 100;
myVar += 100;