// Get From Server
const myJsonObjectFromServer = '{"Username": "Osama", "Age": 39}';
console.log(typeof myJsonObjectFromServer);
console.log(myJsonObjectFromServer);

// Convert To JS Object
const myJsObject = JSON.parse(myJsonObjectFromServer);
console.log(typeof myJsObject);
console.log(myJsObject);

// Update Data
myJsObject["Username"] = "Elzero";
myJsObject["Age"] = 40;

// Send To Server
const myJsonObjectToServer = JSON.stringify(myJsObject);
console.log(typeof myJsonObjectToServer);
console.log(myJsonObjectToServer);