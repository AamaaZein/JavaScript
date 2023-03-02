let user = {
        theName: "asom",
        theAge: 19,
        skills:["HTNML","CSS","JS"],
        Available: false,
        addresses: {
            kss: "Rayadh",
            eghpt:{
                one:"Cairo",
                toe: "Giza",
            },
        },
        checkAv: function (){
        if (user.available === true){
            return `free for Work`;
        }else {
            return `Not free`;
        }
        },
};
console.log(user.name);
console.log(user.age);
console.log(user.skills);
console.log(user.skills.Join(" /  "));
console.log(user.skills[2]);//Access With Index
console.log(user.addresses.ksa);
console.log(user.addresses.eghpt.one);
console.log(user["addresses"].eghpt.one);
console.log(user["addresses"]["eghpt"]);
console.log(user["addresses"]["eghpt"]["one"]);

console.log(user.checkAv());
