'use strict';

let a = 5,
    b = a;

b= b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

const copy = obj;

copy.a = 10;

console.log(copy);
console.log(obj);

function myCopy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = myCopy(numbers);

console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20,
};

let clone = Object.assign({}, add);

clone.d = 20;

console.log(add);
console.log(clone);

let oldArray = ['a', 'b', 'c'];
let newArray = oldArray.slice();
newArray[1] = 'asdasd';


console.log(newArray);
console.log(oldArray);

let video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    intenet = [...video, ...blogs, 'vk', 'facebook'];

console.log(intenet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

let num = [2, 5, 7];
log(...num);

const array = ['a', 'b', 'c'];

const newArr = [...array];

const q = {
    one: 1,
    two: 2,
};

const newObj = {...q};