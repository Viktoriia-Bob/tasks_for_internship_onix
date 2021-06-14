function convertArrayToString(array) {
    let string = array.join(' ');
    return string[0].toUpperCase() + string.slice(1, string.length - 1) + '+' + string.slice(string.length - 1);
}
let arr = ['i', 'know', 'javascript', '!'];
const str = convertArrayToString(arr);
console.log(str);