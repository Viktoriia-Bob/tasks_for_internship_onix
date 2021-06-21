const obj1 = {
    day: 'Monday',
    value: 8,
    obj: {
        value: 10
    }
}
const obj2 = {
    day: 'Tuesday',
    value: 7
}
const obj3 = {
    value: 8,
    day: 'Monday',
    obj: {
        value: 11
    }
}
const obj4 = {
    day: 'Monday',
    obj: {
        value: 10
    },
    value: 8    
}

// The order of values is not taken into account.
function compareObjects(object1, object2) {
    return JSON.stringify(object1) == JSON.stringify(object2); 
}

function deepEqual(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (const key of keys1) {
      const val1 = object1[key];
      const val2 = object2[key];
      const areObjects = isObject(val1) && isObject(val2);
      if (
        areObjects && !deepEqual(val1, val2) ||
        !areObjects && val1 !== val2
      ) {
        return false;
      }
    }
  
    return true;
}
  
function isObject(object) {
    return object != null && typeof object === 'object';
}

console.log(compareObjects(obj1, obj2));
console.log(compareObjects(obj1, obj3));
console.log(compareObjects(obj1, obj4));
console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj3));
console.log(deepEqual(obj1, obj4));