// 1
const users = 
[ 
    { gender: 'male', age: 22, }, 
    { gender: 'female', age: 20, }, 
    { gender: 'male', age: 32, } 
];

const average = users.reduce((total, user) => total + user.age, 0) / users.length;
console.log(average);

const promise = new Promise((resolve, reject) => {
    return resolve(users.reduce((total, user) => total + user.age, 0));
})
.then(data => data / users.length)
.then(aver => console.log(aver));


// 2
const object = {
    a: 'somestring',
    b: 42,
    c: false,
    k: 11,
};
const numbers = [];

Object.keys(object).forEach((item) => {
    if (typeof object[item] === 'number') {
        numbers.push(object[item]);
    }
});

console.log(numbers);