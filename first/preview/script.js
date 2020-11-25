'use strict';

let btns = document.querySelectorAll('button'),
    overlay = document.querySelector('.overlay');

// btn.onclick = function() {  Устарел
//     alert('Click');
// };

let i = 0
let deleteElement = (event) => {
    console.log(event.target);
    console.log(event.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});

let link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event.target);
});

