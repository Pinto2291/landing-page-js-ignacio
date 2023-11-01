/* Menu button */
const menu_mobile_button = document.getElementById('menu-mobile');
const menu_mobile = document.getElementById('navegacion-mobile');
const btn_cerrar = document.getElementById('btn-cerrar');

menu_mobile_button.addEventListener('click', () => {
    menu_mobile_button.style.display = 'none';
    menu_mobile.style.display = 'flex';
})

btn_cerrar.addEventListener('click', () => {
    menu_mobile.style.display = 'none';
    menu_mobile_button.style.display = 'flex';
});

/* Slider */

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.sub-part');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const counter = document.querySelector('.counter');

let currentSlide = 0;
const slideCount = slides.length;

// Hide all slides except the first one
slides.forEach((slide, index) => {
  if (index !== currentSlide) {
    slide.style.display = 'none';
  }
});

// Update the counter
counter.textContent = `${currentSlide + 1} / ${slideCount}`;

// Add event listeners to the buttons
prevBtn.addEventListener('click', () => {
  // Hide the current slide
  slides[currentSlide].style.display = 'none';
  // Update the current slide
  currentSlide = (currentSlide - 1 + slideCount) % slideCount;
  // Show the new current slide
  slides[currentSlide].style.display = 'grid';
  // Update the counter
  counter.textContent = `${currentSlide + 1} / ${slideCount}`;
});

nextBtn.addEventListener('click', () => {
  // Hide the current slide
  slides[currentSlide].style.display = 'none';
  // Update the current slide
  currentSlide = (currentSlide + 1) % slideCount;
  // Show the new current slide
  slides[currentSlide].style.display = 'grid';
  // Update the counter
  counter.textContent = `${currentSlide + 1} / ${slideCount}`;
});