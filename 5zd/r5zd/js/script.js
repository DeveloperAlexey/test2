let menuItem = document.querySelector('.menu'),
    body = document.getElementsByTagName('body'),
    lin = document.createElement('li');
body[0].style.backgroundImage = ("url(img/apple_true.jpg)");//'/img/apple_true.jpg';
lin.innerHTML = 'пятый пункт';
lin.classList.add('menu-item');
menuItem.appendChild(lin);

console.log(body);
