let myNums=[1, 2, 3, 4, 5, 6];
letnewArray = [];

for (let i = 0; i< myNums.length; i++){
    newArray.push(myNums[i]+myNums[i]);
}
console.log(newArray);

// Same Idea With Map

//let addself = myNums.map(function(element, index, arr){
    //console.log(`current Element=> $ (element)`);
    //console.log(`current Index=> $ (Index)`);
    //console.log(`Array=> $ (array)`);
    //console.log(`This=> $ (this)`);

    
//let addself = myNums.map(function(element, index, arr){
//return element + element;
//}, 10)
//console.log(addSelf);


let addSelf = myNums.map((element)=>Element+Element);

console.log(addSelf);
