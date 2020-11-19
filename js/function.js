"use strict";

function showFirstMessage(text) {
    console.log(text);
    let num = 20;
}

showFirstMessage('Hello world!');

function calc(a, b) {
    return a + b;
}

function ret() {
    let num = 50;
    return num;
}

let logger = function() {
    console.log('Hello')
};

logger();

const calcStr = (a, b) => { return a + b };

console.log(calcStr(5, 8));