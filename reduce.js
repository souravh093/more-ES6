const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// .reduce(accumulatorFunction, initial value);
// accumulatorFunction use two parameters
const total = numbers.reduce((previous, current) => previous + current , 0)
console.log(total);