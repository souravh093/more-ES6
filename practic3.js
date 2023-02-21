const numbers = [1, 9, 17, 22];
let sumNumbers = 0;
for (const number of numbers) {
    sumNumbers += number;
}

console.log(sumNumbers);

const numbers2 = [1, 9, 17, 22];
const useReduce = numbers.reduce((previous, current) => previous + current, 0);
console.log(useReduce);