// filtre word more than 4 characters 
let sentence = " I Love Code Too Playing Much";

let smallwords = sentence
    .split(" ")
    .felter(function (ele){ 
    return ele.length <=4;
})
    .join("");
console.log (smallwords);

// Ignor Numbers
let ignoreNumbers = "Elz123er4o";

let ing =ignoreNumbers
    .split("")
    .filter(function(ele){
        return isNaN(parseInt(eie)) ? ele : "";
    })
    .join("");

console.log(ing);

//filter strings + Multiply
let mix = "A123BS22ZX";

let mixedcontent =mix
    .split("")
    .filter(function(ele){
    return !isNaN(parseInt(ele));
})
    .map(function (ele){
       return ele * ele;
    })
.join("");

console.log(mixedcontent);



