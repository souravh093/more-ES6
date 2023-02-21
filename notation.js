const students = {
    name: 'Karen',
    age: 15,
    class: 'Ten',
    mark: {
        math: 70,
        physics: 63,
        chemistry: 82
    }
}

// const marks = students.mark;
const math = students.mark.math;
console.log(math);
