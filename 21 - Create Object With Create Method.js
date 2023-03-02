let user = {
    age:20,
    doubleAge: function (){
        return this.age * 2;
    },
};

console.log(age);
console.log(user.age);
console.log(user.doubleAge());

let obj =Object.create({});

Obj.a = 100;

console.log(obj);

let copyObj =Object.create(user);

copyObj.age = 30;
console.log(copyObj );
console.log(copyObj.age);
console.log(copyObj.doubleAge());
