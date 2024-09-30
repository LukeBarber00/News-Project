
// Music Section Functions

function nextSlideMusic(carouselId) {
    const carousel = document.getElementById(carouselId);
    const slide = carousel.querySelector('.carousel-slide');
    const slides = slide.querySelectorAll('.album'); // Target .album class
    const totalSlides = slides.length;
    const currentIndex = Array.from(slides).findIndex(album => album.classList.contains('active'));

    if (currentIndex === -1) {
        slides[0].classList.add('active');
    } else {
        slides[currentIndex].classList.remove('active');
        const nextIndex = (currentIndex + 1) % totalSlides;
        slides[nextIndex].classList.add('active');
        slide.style.transform = `translateX(-${nextIndex * 100 / totalSlides}%)`;
    }
}

function prevSlideMusic(carouselId) {
    const carousel = document.getElementById(carouselId);
    const slide = carousel.querySelector('.carousel-slide');
    const slides = slide.querySelectorAll('.album'); // Target .album class
    const totalSlides = slides.length;
    const currentIndex = Array.from(slides).findIndex(album => album.classList.contains('active'));

    if (currentIndex === -1) {
        slides[0].classList.add('active');
    } else {
        slides[currentIndex].classList.remove('active');
        const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        slides[prevIndex].classList.add('active');
        slide.style.transform = `translateX(-${prevIndex * 100 / totalSlides}%)`;
    }

    console.log('Previous Slide:', { currentIndex, prevIndex }); // Debugging information
    updateSlideOpacity(slides);
}

// Function to update the opacity of the slides based on the 'active' class
function updateSlideOpacity(slides) {
    slides.forEach(slide => {
        const img = slide.querySelector('img');
        if (slide.classList.contains('active')) {
            img.style.opacity = 1; // Fully opaque for active slide
        } else {
            img.style.opacity = 0.5; // Transparent for inactive slides
        }
    });
    console.log('Slide Opacity Updated'); // Debugging information
}

