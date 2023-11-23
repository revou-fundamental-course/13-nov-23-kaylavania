// autoslide images
let index = 0;
let transitionDelay = 3000;

let slideContainer = document.querySelector(".slideshow");
let slides = slideContainer.querySelectorAll(".slide");

for (let slide of slides) {
  slide.style.transition = `all ${transitionDelay/1000}s linear`;
}

showSlide(index);

function showSlide(slideNumber) {
  slides.forEach((slide, i) => {
    slide.style.display = i == slideNumber ? "block" : "none";
  });

  index++;
 
  if (index >= slides.length) {
    index = 0;
  }
}

setInterval (() => showSlide(index), transitionDelay);

// contact us
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const submitButton = document.getElementById('submitBtn');

    form.addEventListener('input', function() {
      const isFormValid = nameInput.value.trim() !== '' && emailInput.value.trim() !== '';
      submitButton.disabled = !isFormValid;
    });

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      alert('Form submitted!');
     
    });
  });