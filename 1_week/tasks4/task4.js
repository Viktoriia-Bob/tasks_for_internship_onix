const arr1 = [1,2,3,4,5,6];
const arr2 = [5,6,7,8,9];
const arr3 = [...arr1.filter(function(obj) { return arr2.indexOf(obj) == -1; }),
    ...arr2.filter(function(obj) { return arr1.indexOf(obj) == -1; })];
console.log(arr3);