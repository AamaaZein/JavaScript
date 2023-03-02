//get friends with Name Starts With A
let friends = ["Ahmed","Rema","Hanaa","Asmaa","Amgad"];
let filterdfriends = friends.filter(function(element){
    return element.startsWith("A") ? true : false;
});
console.log(filterdfriends);
//Get Even Numbers Only
let Numbers = [11, 20, 2, 5, 17, 10];

let evevNumbers = Numbers.filter(function(element){
    return element %2=== 0  ? true : false;
});
console.log(evevNumbers);


// Test Map vs filter
//let Numbers = [11, 20, 2, 5, 17, 10];
//let addMap = Numbers.map(function(element){
  //  return element + element;
//})
//consolelog(addMap);

//let Numbers = [11, 20, 2, 5, 17, 10];
//let addFilter = Numbers.map(function(element){
  //  return element + element;
//})
//consolelog(addfelter); 