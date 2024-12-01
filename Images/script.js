const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
const img = document.querySelector('img');
const next = document.querySelector('#next');
const back = document.querySelector('#back');
let currentIndex = 0;

next.addEventListener('click', () => {
    if(currentIndex === images.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }

    img.setAttribute('src', images[currentIndex]);
});

back.addEventListener('click', () => {
    if(currentIndex === 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex--;
    }

    img.setAttribute('src', images[currentIndex]);
});