// toushstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcansel

window.addEventListener('DOMContentLoaded', () => {
    let box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('Start');
        console.log(e.touches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log('Move');

        console.log(e.targetTouches[0].pageX);
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault();
        console.log('End');
    });
});

// touches
// targetTouches
// changedTouches
