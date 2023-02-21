
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
    provideFeedBack() {
        console.log(`${this.name} thank you for your feedback!`);
    }
}

const sourav = new Instructor('Sourav', 'Barishal');
const rafi = new Instructor('rafi', 'Dhaka');
console.log(sourav, rafi);
