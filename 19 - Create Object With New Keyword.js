let user = {
    age:18,
};

console.log(user);

user.age = 19;
user["country"] = "syria";

user.sayHello= function (){
    return `Hello` ;
}
console.log(user);
console.log(age);
console.log(user.country);
console.log(user.sayHello());

// wiyh new keyword
let user = new Object({
    age:20,
});
console.log(user);

user.age = 19;
user["country"] = "syria";

user.sayHello= function (){
    return `Hello` ;
}
console.log(user);
console.log(age);
console.log(user.country);
console.log(user.sayHello());