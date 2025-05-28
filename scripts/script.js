// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Lazy Loading Images
document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll("img.lazyload");
    lazyImages.forEach((img) => {
        img.src = img.dataset.src;
    });
});

// Gallery Autoplay and Navigation
const galleryContainer = document.querySelector('.gallery-container');
const prevButton = document.querySelector('.gallery-prev');
const nextButton = document.querySelector('.gallery-next');

let scrollAmount = 0;
const scrollStep = 200;
const autoplayInterval = 3000;

// Autoplay Functionality
function autoplayGallery() {
    scrollAmount += scrollStep;
    if (scrollAmount >= galleryContainer.scrollWidth) {
        scrollAmount = 0;
    }
    galleryContainer.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
    });
}
setInterval(autoplayGallery, autoplayInterval);

// Manual Navigation
prevButton.addEventListener('click', () => {
    scrollAmount -= scrollStep;
    if (scrollAmount < 0) {
        scrollAmount = galleryContainer.scrollWidth - galleryContainer.clientWidth;
    }
    galleryContainer.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
    });
});

nextButton.addEventListener('click', () => {
    scrollAmount += scrollStep;
    if (scrollAmount >= galleryContainer.scrollWidth) {
        scrollAmount = 0;
    }
    galleryContainer.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
    });
});