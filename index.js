/**
 * This function can handle any no of inputs
 * @param  {...any} a Rest Param
 */
function firstFun(...a) {
    const aa = [...a];//Spread operator
    aa.forEach(n => {
        console.log(n);
    });
}
firstFun(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
firstFun(1);
firstFun(1, 2);
const secFun = function (...a) {
    const bb = [...a];
    let sum = 0;
    bb.forEach(n => {
        sum += n;
    })
    return sum;
}
const y = secFun(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
console.log(y);
const thirdFun = (...a) => {
    [...a].map(n => console.log(n));
}
thirdFun(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);


