const numbers = [2, 8, 4, 9, 6];
// function getDuubled() {
//   const output = [];

//   for (const number of numbers) {
//     const doubleed = doubledIt(number);
//     output.push(doubleed);
//   }

//   return output;
// }

const doubledIt = numbers => Math.max(numbers);

const makeDouble = numbers.map(doubledIt);

// function doubledIt(numbers) {
//   return numbers * 2;
// }

const result = makeDouble;
console.log(result);


// Purpose: 
// 1. Get an array
// 2. for every elements of the array do something 
// 3. store the result in an array
// 4. return the result array
