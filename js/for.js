"use strict";

let num = 50;
while (num <= 55) {
    console.log(num);
    num++;
}

let num2 = 50;
do {
    console.log(num2);
    num2++;
} 
while (num2 < 55);

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        //break;
        continue;
    }
    console.log(i);
}