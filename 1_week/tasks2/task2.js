function convertStringToArray(string) {
    return string.split(/\W/);
}

const str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
const arr = convertStringToArray(str);

console.log(arr);