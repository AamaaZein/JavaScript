let myStrings = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,1,2,0,2"

let solutions = myStrings.split(",").filter(function(ele) {
    return isNaN(parseInt(ele))
}).map(function(ele){
    return ele.replace("_"," ")
}).reduce(function(acc,current){
    return acc + current
}).slice(+true)

console.log(solutions);
