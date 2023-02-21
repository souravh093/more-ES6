
// syntactic sugar
class Instructor {
    name;
    designation = 'Web Course Instructor'
    team = 'Web Team'
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    startSupportSession(time) {
        console.log(`Start the support session ${time}`);
    }
}

const sourav = new Instructor('Sourav', 'Barishal');
console.log(sourav);
