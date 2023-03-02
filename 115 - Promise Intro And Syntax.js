// const myPromise = new Promise((resolveFunction, rejectFunction) => {
//   let connect = false;
//   if (connect) {
//     resolveFunction("Connection Established");
//   } else {
//     rejectFunction(Error("Connection Failed"));
//   }
// }).then(
//   (resolveValue) => console.log(`Good ${resolveValue}`),
//   (rejectValue) => console.log(`Bad ${rejectValue}`)
// );

const myPromise = new Promise((resolveFunction, rejectFunction) => {
    let connect = true;
    if (connect) {
        resolveFunction("Connection Established");
    } else {
        rejectFunction(Error("Connection Failed"));
    }
    });
    
    console.log(myPromise);
    
    let resolver = (resolveValue) => console.log(`Good ${resolveValue}`);
    let rejecter = (rejectValue) => console.log(`Bad ${rejectValue}`);
    
    myPromise.then(resolver, rejecter);
    
    myPromise.then(
    (resolveValue) => console.log(`Good ${resolveValue}`),
    (rejectValue) => console.log(`Bad ${rejectValue}`)
    );
    
    myPromise.then(
    (resolveValue) => console.log(`Good ${resolveValue}`),
    (rejectValue) => console.log(`Bad ${rejectValue}`)
    );