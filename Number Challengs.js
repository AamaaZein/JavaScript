// Number Challenge 

let a = 1_00;   //100
let b = 2_00.5; //200.5
let c = 1e2;    //100
let d = 2.4;    //2.4

// Find the smallest number in all variables and return integer
console.log(parseInt(Math.min(a, b, c, d)));    // result is 2

// Use variables a + d one time to get the needed output
console.log(Math.pow(a, (Math.round(d))));     // result is 10_000

// Get Integer 2 from d variable with 4 methods
console.log(Math.round(d));
console.log(Math.trunc(d));
console.log(Math.floor(d));
console.log(parseInt(d));

// Use variables b + d to get this values 
console.log((Math.floor(b) / (Math.ceil(d))).toFixed(2)) // 66.67 String
console.log(Math.ceil(b / (Math.ceil(d)))); // 67 Number