function convertStringToArray(string) {
    return string.split(/\s/);
}

const str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
const arr = convertStringToArray(str);

console.log(arr);