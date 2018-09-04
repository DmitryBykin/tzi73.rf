'use strict';
var slidesSmall = document.querySelectorAll('.slider__wrapper--small .slider__items .slider__item');
var controlsSmall = document.querySelectorAll('.slider__wrapper--small .slider__control-items .slider__control-item');
var sliderSmall = document.querySelector('.slider__wrapper--small .slider');
var prevSmall = document.querySelector('.slider__wrapper--small .slider__btn--prev');
var nextSmall = document.querySelector('.slider__wrapper--small .slider__btn--next');

var sliderBig = document.querySelector('.slider__wrapper--big .slider');
var slidesBig = document.querySelectorAll('.slider__wrapper--big .slider__items .slider__item');
var controlsBig = document.querySelectorAll('.slider__wrapper--big .slider__control-items .slider__control-item');
var prevBig = document.querySelector('.slider__wrapper--big .slider__btn--prev');
var nextBig = document.querySelector('.slider__wrapper--big .slider__btn--next');
var closeBtn = document.querySelector('.slider__btn--close');

var currentSlide = 0;

goToSlide(currentSlide);

nextSmall.onclick = function(event) {
  event.stopPropagation();
  nextSlide();
}

prevSmall.onclick = function(event) {
  event.stopPropagation();
  prevSlide();
}

function prevSlide() {
  goToSlide(currentSlide - 1);
}

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function goToSlide(n) {
 slidesSmall[currentSlide].className = 'slider__item';
 controlsSmall[currentSlide].className = 'slider__control-item';

 slidesBig[currentSlide].className = 'slider__item';
 controlsBig[currentSlide].className = 'slider__control-item';

 currentSlide = (n + slidesSmall.length) % slidesSmall.length;

 slidesSmall[currentSlide].className = 'slider__item  slider__item--active';
 controlsSmall[currentSlide].className = 'slider__control-item  slider__control--active';

 slidesBig[currentSlide].className = 'slider__item  slider__item--active';
 controlsBig[currentSlide].className = 'slider__control-item  slider__control--active';
}

sliderSmall.onclick = function() {
  var body = document.querySelector("body");
  body.classList.add("overlay");
  var sliderBig = document.querySelector(".slider__wrapper--big");
  sliderBig.classList.remove("slider--hidden");
}

closeBtn.onclick = function() {
  closeBigSlider();
}

function closeBigSlider() {
  var body = document.querySelector("body");
  body.classList.remove("overlay");
  var sliderBig = document.querySelector(".slider__wrapper--big");
  sliderBig.classList.add("slider--hidden");
}

nextBig.onclick = function(event) {
  event.stopPropagation();
  nextSlide();
}

prevBig.onclick = function(event) {
  event.stopPropagation();
  prevSlide();
}

sliderBig.onclick = function() {
  nextSlide();
}

document.addEventListener('keypress', function(e) {
   if(e.keyCode == 27) closeBigSlider();
});
