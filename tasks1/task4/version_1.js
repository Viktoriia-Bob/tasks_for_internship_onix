const arr = [12, 15, 20, 25, 59, 79];

const average = (array) => {
    let num = 0;
    for (let arrNum of array) {
        num += arrNum;
    }
    return num / arr.length;
}

console.log(average(arr));
