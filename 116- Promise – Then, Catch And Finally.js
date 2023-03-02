const myPromise = new Promise((resolveFunction, rejectFunction) => {
    let employees = [];
    if (employees.length === 4) {
        resolveFunction(employees);
    } else {
        rejectFunction(Error("Number Of Employees Is Not 4"));
    }
    });
    
    myPromise
    .then((resolveValue) => {
    resolveValue.length = 2;
        return resolveValue;
    })
    .then((resolveValue) => {
        resolveValue.length = 1;
        return resolveValue;
    })
    .then((resolveValue) => {
        console.log(`The Choosen Emplyee Is ${resolveValue}`);
    })
    .catch((rejectedReason) => console.log(rejectedReason))
    .finally(console.log("The Operation Is Done")); 