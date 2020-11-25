'use strict';

let arr = [1, 2, 5, 4, 7, 9];
arr.sort(compareNum);

function compareNum(a, b) {
    return a-b;
}

arr.pop(0);
console.log(arr);

arr.push(12);
console.log(arr);
for (let value of arr) {
    console.log(value);
}

//arr[99 = 0;]

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внитри массива ${arr}`);
});

let str = prompt('', '');
let products = str.split(', ');
products.sort();
console.log(products.join('; '));
