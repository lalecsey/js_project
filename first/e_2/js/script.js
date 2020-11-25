'use strict';

let box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    wrapper = document.querySelector('.wrapper'),
    hearts = wrapper.querySelectorAll('.heart'), // родитель
    oneHeart = document.querySelector('.heart');


box.style.backgroundColor = 'blue';
box.style.width = '500px';

let num = 500;

box.style.cssText = `background-color: blue; width: ${num}px`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

let div = document.createElement('div');
// let text = document.createTextNode('Тут был я');

div.classList.add('black');

wrapper.append(div);   
// wrapper.appendChild(div);  старый


// wrapper.prepend(div);
// hearts[0].before(div);
hearts[0].after(div);
//wrapper.insertBefore(div, hearts[0]);  старый
//                     что     куда                                

circles[0].remove();
// wrapper.removeChild(hearts[1]);


hearts[0].replaceWith(circles[0]);
//wrapper.replaceChild(circles[0], hearts[0]);
//                      который      вместо

div.innerHTML = '<h2>Hello, world</h2>';
//div.textContent = 'Hello';  только текст

div.insertAdjacentHTML('beforebegin', '<h3>hello</h3>')


