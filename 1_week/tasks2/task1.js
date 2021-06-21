function replacer(string, value, sub) {
    return string.replace(new RegExp(value, 'g'), sub);
}

let str = 'aaa @ bbb @ ccc';

const newStr = replacer(str, '@', '!');

console.log(newStr);