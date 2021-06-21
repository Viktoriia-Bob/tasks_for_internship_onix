const obj = {
    q: null,
    w: null,
    e: null, 
    r: null, 
    t: null,
    y: null
}
let str = '';
for (let k of Object.keys(obj)) {
    str += k.toString();
}

console.log(str);