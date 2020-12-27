'use strict';

// new RegExp('pattern', 'flags'); страрый вариант

// const ans = prompt('Введите ваше имя');

const reg = /n/ig;
// i 
// g 
// m

// // console.log(ans.search(reg));
// console.log(ans.match(reg));

// console.log(ans.match(reg));

/////////////

// const pass = prompt('Password');

// console.log(pass.replace(/./g, "*"));
// console.log(pass.replace(/\./g, "*"));
// console.log(pass.replace(/\\/g, "*"));
// console.log(pass.replace(/\^/g, "*"));

///////////

// console.log('12-34-56'.replace(/-/g, ':'));

console.log(reg.test(ans)); // true and false

//////////

//  \d  цифры
//  \w  буквы
//  \s  пробелы

console.log(ans.match(/\d/g));

const str = 'My name is R2D2';

console.log(str.match(/\w\d\w\d/i));

/////////

// \D  не число
// \W  не буквы

