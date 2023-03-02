let nums = [10, 20, 30, 15];
let add = nums. reduce(function(acc, current, index, arr) {
    console.log(`Acc => ${acc}`);
    console.log(`current Element => ${current}`);
    console.log(`current Element index => ${index}`);
    console.log(`Arry => ${arr}`);
    console.log(acc |+ current);
    console.log(`#############`);
    return acc + current;
})

console.log(add);
