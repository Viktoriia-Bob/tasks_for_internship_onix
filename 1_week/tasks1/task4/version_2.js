const arr = [12, 15, 20, 25, 59, 79];

const average = (array) => {
    return array.reduce((a, b) => a + b) / arr.length;
}

console.log(average(arr));