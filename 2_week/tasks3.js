const fetch = require('node-fetch');
// 1
const increaseOne = (num1, num2, num3) => {
    return Promise.all([Promise.resolve(num1 + 1),
        Promise.resolve(num2 + 1),
        Promise.resolve(num3 + 1)])
        .then(values => values);
}

(async () => {
const numbers = await increaseOne(0, 22, 44);
console.log(numbers);
})();

// 2
async function callApi1() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return resp.json();
}
callApi1()
.then(data => {
    console.log(data); 
}).catch(err => console.log(err));

async function callApi2() {
    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await resp.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}
callApi2();


// 3
const foo = new Promise((resolve, reject) => {
    resolve('Promise1');
});
const bar = new Promise((resolve, reject) => {
    resolve('Promise1');
});
console.log('Res', foo, bar);

Promise.all([foo, bar]).then(promises => console.log('Res', promises));