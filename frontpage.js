// Toggle navigation menu on small screens
document.getElementById('nav-toggle').addEventListener('click', function() {
    document.getElementById('nav-menu').classList.toggle('active');
});

// Smooth scroll to sections
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Carousel functionality
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - currentSlide) * 100}%)`;
    });
}

function carouselNext() {
    currentSlide++;
    showSlide(currentSlide);
}

function carouselPrev() {
    currentSlide--;
    showSlide(currentSlide);
}

// Initialize the first slide
showSlide(currentSlide);
