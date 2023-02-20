const users = [
    {
        id: 1,
        name: 'John',
        profession: 'Doctor'
    }
]

console.log(users[0].name);
 
const data = {
    count: 500,
    data: [
        {
            id: 1,
            name: 'John',
            job: 'leader'
        },
        {
            id: 2,
            name: 'Jack',
            job: 'teacher '
        }
    ]
}

// console.log(data.data[1].job);

const person = {
    id: 1,
    name: 'Sourav halder',
    address: {
        street: {
            first: '35/4 Hindu para',
            scound: 'pandit-bari',
            side: 'Right'
        },
        posOffice: 'Charkaya',
        city: 'Barishal'
    }
}

console.log(person.address.stree?.side);