const obj = {
    Monday: 8,
    Tuesday: 7,
    Wednesday: 6,
    Thursday: 7,
    Friday: 5
}
let days = Object.keys(obj);
let values = Object.values(obj);

const workHours = values.reduce((a, b) => a + b);

console.log(days);
console.log(values);
console.log(workHours);