const peoples = [
    {
        name: 'Meena',
        age: 20
    },
    {
        name: 'Rina',
        age: 15
    },
    {
        name: 'Suchorita',
        age: 22
    }
]

// for (const key in people) {
//     if (Object.hasOwnProperty.call(people, key)) {
//         const element = people[key];
//         console.log(element);
        
//     }
// }
// let sumPeopleAge = 0;
// for (const people of peoples) {
//     const peopleAge = people.age;
//     sumPeopleAge += peopleAge;
// }

// console.log(sumPeopleAge);

const sumPeopleAge = peoples.reduce((previous, current) => previous + current.age, 0);
console.log(sumPeopleAge);