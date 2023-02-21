const numbers = [12, 5, 91, 39, 13, 48, 1];
const bigNumbers = numbers.filter(number => number > 20);
const tiny = numbers.filter(number => number < 10);
const event = numbers.filter(number => number % 2 === 0);
// console.log(tiny);
// console.log(event);
console.log(bigNumbers);

const products = [
    {
        id: 1,
        name: 'Laptop',
        price: 48000,
        brand: 'Dell'
    },
    {
        id: 2,
        name: 'Mobile',
        price: 18000,
        brand: 'Realme'
    },
    {
        id: 3,
        name: 'Mouse',
        price: 1200,
        brand: 'Logitech'
    },
    {
        id: 4,
        name: 'Keyboard',
        price: 2000,
        brand: 'a4tech'
    },
    {
        id: 5,
        name:
         'Monitor',
        price: 11000,
        brand: 'Samsung'
    },

]


const expensive = products.filter(p => p.price > 10000);
console.log(expensive);