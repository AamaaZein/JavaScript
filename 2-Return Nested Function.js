//example 1
function sayMessage(fName, lName){
    let message = 'Hello' ;
// nested function
    function concatMsg() {
        message = `${message} ${fName} ${lName}`;
    }
concatMsg();
return message;
}
console.log(sayMessage("asom", "zein"));

//example 2
function sayMessage(fName, lName){
    let message = 'Hello' ;
// nested function
    function concatMsg() {
        return `${message} ${fName} ${lName}`;
    }
return message;
}
console.log(sayMessage("asom", "zein"));

//example 3
function sayMessage(fName, lName){
    let message = 'Hello' ;
// nested function
    function concatMsg() {
        function getfulName(){
            return `${fName} ${lName}`;
        }
        return `${message} ${getfulName()} }`;
    }
return message;
}
console.log(sayMessage("asom", "zein"));
