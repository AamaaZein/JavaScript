let theBiggest = ["Bal","Propaganda","Other","AAA","Battery","Test"];

let check = theBiggest. reduce(function(acc, current, index, arr) {
    console.log(`Acc => ${acc}`);
    console.log(`current Element => ${current}`);
    console.log(`Arry => ${arr}`);
    console.log(acc.length > current.length ? acc :current);
    console.log(`#############`);
    return acc.length > current.length ? acc :current;
})

console.log(check );


let removechars =["E","@","@","L","Z","@"];

let finalstring = removechars.filter(function(ele) {
    return !ele.startsWith("@");
});reduce(function(acc,current ){
    return`${acc}${current}`;
});

console.log(finalstring);
