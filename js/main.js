'use strict';

document.querySelector('.burger').addEventListener('click', function() {
    let nav = document.querySelector('nav');
    this.classList.toggle('burger--close');

    if (!nav.classList.contains('nav--active')) {
        nav.style.display = 'flex';
        setTimeout(function() {
            nav.classList.add('nav--active');
        }, 15);
    } else {
        nav.classList.remove('nav--active');
        setTimeout(function() {
            nav.style = '';
        }, 250);
    }
});

console.log('test');