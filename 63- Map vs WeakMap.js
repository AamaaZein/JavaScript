let mapUser = { theName: "Elzero" };

let myMap = new Map();

myMap.set(mapUser, "Object Value");

mapUser = null; // Override The Reference

console.log(myMap);

console.log("#".repeat(20));

let wMapUser = { theName: "Elzero" };

let myWeakMap = new WeakMap();

myWeakMap.set(wMapUser, "Object Value");

wMapUser = null; // Override The Reference

console.log(myWeakMap);