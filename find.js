const numbers = [12, 5, 91, 39, 13, 48, 1];

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 48000,
    brand: "Dell",
  },
  {
    id: 2,
    name: "Mobile",
    price: 18000,
    brand: "Realme",
  },
  {
    id: 3,
    name: "Mouse",
    price: 1200,
    brand: "Logitech",
  },
  {
    id: 4,
    name: "Keyboard",
    price: 2000,
    brand: "a4tech",
  },
  {
    id: 5,
    name: "Monitor",
    price: 11000,
    brand: "Samsung",
  },
];

const cheapPrice = products.filter((p) => p.price < 3000);
console.log(cheapPrice);

const findMethod = numbers.find((f) => f % 3 === 0);
console.log(findMethod);
