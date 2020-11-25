'use strict';

let str = 'test';
let arr = [1, 2, 4];

console.log(str[2]);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let fruit = 'Some fruit';

console.log(fruit.indexOf('fruit'));

let logg = 'Hello world!';

console.log(logg.slice(6, 11));
console.log(logg.slice(6));
console.log(logg.slice(-6, -1));

console.log(logg.substring(6, 11));
console.log(logg.substr(6, 5));

let num = 12.2;
console.log(Math.round(num));

let test = '12.2px';
console.log(parseInt(test));
console.log(parseFloat(test));