let menuItem = document.querySelector('.menu'),
    body = document.getElementsByTagName('body'),
    lin = document.createElement('li'),
    title = document.getElementById('title'),
    adv = document.querySelector('.column .adv'),
    column = document.querySelectorAll('.column'),
    prom = document.getElementById('prompt');

body[0].style.backgroundImage = ("url(img/apple_true.jpg)");//'/img/apple_true.jpg';

lin.innerHTML = 'пятый пункт';

lin.classList.add('menu-item');

menuItem.appendChild(lin);

column[1].removeChild(adv);

let prom_ = prompt('attitude towards apple?');

prom.innerHTML = prom_;
