const sliderTrack = document.querySelector('.slider-track');
let currentSlide = 0;
const slidesToShow = 4;
const totalSlides = 10;

function updateSliderPosition() {
    const slideWidth = sliderTrack.children[0].getBoundingClientRect().width;
    sliderTrack.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
}

function nextSlide() {
    if (currentSlide < totalSlides - slidesToShow) {
        currentSlide++;
        updateSliderPosition();
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        updateSliderPosition();
    }
}

window.addEventListener('resize', updateSliderPosition);
