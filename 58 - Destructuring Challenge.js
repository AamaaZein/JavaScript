let chosen = 1;
let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];
let solutions = ([
    {title: t1, age: g1, available: v1, skills: [, k1],},
    {title: t2, age: g2, available: v2, skills: [, k2],},
    {title: t3, age: g3, available: v3, skills: [, k3],},
] = myFriends);

if (chosen === 1) {
    console.log(t1)
    console.log(g1)
    v1 === true ? console.log("Available") : console.log("Not Available")
    console.log(k1)
}
if (chosen === 2) {
    console.log(t2)
    console.log(g2)
    v2 === true ? console.log("Available") : console.log("Not Available")
    console.log(k2)
}
if (chosen === 3) {
    console.log(t3)
    console.log(g3)
    v3 === true ? console.log("Available") : console.log("Not Available")
    console.log(k3)
}

