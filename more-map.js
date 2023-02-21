const numbers = [12, 52, 91, 99, 72, 44];
const getQuic = numbers => numbers * 3;
const makeQuic = numbers.map(getQuic);
console.log(makeQuic); 

const friends = ['Tom', 'Bob', 'lokki', 'Sonar'].map(friend => friend[0]);
console.log(friends)

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

const items = products.map(product => product.name)
console.log(items);