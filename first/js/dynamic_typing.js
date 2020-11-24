'use strict';

//String

console.log(String(null));
console.log(String(4));


console.log(typeof(5 + ''));

let num=5;

console.log('https://vk.com/catalog/' + num);

let fontSize = 26 + 'px';

//Number

console.log(Number('4'));

console.log(+'5');


console.log(parseInt('15px', 10));

let answ = +prompt('Hello', '');

// Boolean

let toFalse = [0, '', null, undefined, NaN];

console.log(Boolean('4'));
console.log(!!'4'); // два знака отрицания

[] + false - null + true; // null 
// и спотыкается о лож (null and false)
// или спотыкается о правда('str' and true)