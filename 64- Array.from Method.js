console.log(Array.from("Osama"));
console.log(
    Array.from("12345", function (n) {
    return +n + +n;
    })
);
console.log(Array.from("12345", (n) => +n + +n));

let myArray = [1, 1, 1, 2, 3, 4];

let mySet = new Set(myArray);

console.log(Array.from(mySet));

// console.log([...new Set(myArray)]); // Future

function af() {
    return Array.from(arguments);
}

console.log(af("Osama", "Ahmed", "sayed", 1, 2, 3));