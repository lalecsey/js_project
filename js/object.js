'use strict';

let options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red',
    },
    makeTest: function() {
        console.log('Hello');
    }
};

console.log(options.name);

delete options.name;

console.log(options);

let counter = 0;
for (let key in options) {
    if (typeof(options[key]) == 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} и значение ${options[key][i]}`);
            
        }
    } else {
        console.log(`Свойство ${key} и значение ${options[key]}`);
    }
    counter++;
}

console.log(counter);
console.log(Object.keys(options).length);

options.makeTest();

let {border, bg} = options.colors;
console.log(border);
