var a =1;
let b =2;

function showText(){
    var a =10;
    let b =20;   
console.log(`function - from local ${a}`);
console.log(`function - from local ${b}`);
}


console.log(`from Global ${a}`);
console.log(`from Global ${b}`);

showText();  