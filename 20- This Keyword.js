console.log(this);
console.log(this === window);

myvar = 100;

console.log(window.myvar);
console.log(this.myvar);

function sayHello(){
    console.log(this);
    return this;
}
sayHello();

console.log(sayHello()===window);

document.getElementById("c1").onclick = function (){
    console.log(this);
};

//let user = {
//    age:20,
//    ageInDays: function (){
//        return user.age * 365;
//    },
//};

//console.log(user.age);
//console.log(user.ageInDays());


let user = {
    age:20,
    ageInDays: function (){
        return this.age * 365;
    },
};

console.log(user.age);
console.log(user.ageInDays());
