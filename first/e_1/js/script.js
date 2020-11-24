'use strict';

let box = document.getElementById('box');

console.log(box);

let btns = document.getElementsByTagName('button');

console.log(btns[1]); // вторая кнопка

let circles = document.getElementsByClassName('circle');
console.log(circles);

let hearts = document.querySelectorAll('.heart');

hearts.forEach(item => {
    console.log(item);
});

let oneHeart = document.querySelector('.heart');
console.log(oneHeart);