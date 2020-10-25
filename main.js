const prev = document.querySelector('.control-prev');
const next = document.querySelector('.control-next');
const images = document.querySelectorAll('.slider-img');

let startSlide = 0;

const active = activeSlide => {
  images.forEach(image => {
    image.classList.remove('active');
  });
  images[activeSlide].classList.add('active');
};

const moveNext = () => {
  if (startSlide === images.length - 1) {
    startSlide = 0;
    active(startSlide);
  } else {
    startSlide += 1;
    active(startSlide);
  }
};

const moveBack = () => {
  if (startSlide === 0) {
    startSlide = images.length - 1;
    active(startSlide);
  } else {
    startSlide -= 1;
    active(startSlide);
  }
};

prev.addEventListener('click', moveBack);
next.addEventListener('click', moveNext);
