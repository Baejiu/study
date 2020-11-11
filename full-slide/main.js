'use strict';

//slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('slider__item');
  let dots = document.getElementsByClassName('slider__dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains('slider__item--show')) {
      slides[i].classList.remove('slider__item--show');
    }
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' slider__dot--active', '');
  }
  slides[slideIndex - 1].classList.add('slider__item--show');
  dots[slideIndex - 1].className += ' slider__dot--active';
}

setInterval((n) => {
  slideIndex++;
  showSlides(slideIndex);
}, 5000);

//slider transparent as the window scrolls down
const home = document.querySelector('.slider');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});
