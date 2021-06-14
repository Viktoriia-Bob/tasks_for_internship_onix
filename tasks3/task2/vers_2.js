const obj = {
    q: null,
    w: null,
    e: null, 
    r: null, 
    t: null,
    y: null
}

let str = Object.keys(obj).map(key => key).join('');
console.log(str);