// Function to apply the saved theme on page load
function applySavedTheme() {
    var savedTheme = localStorage.getItem('theme'); // Retrieve the saved theme from localStorage

    // Apply the saved theme (if any)
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        document.getElementById('themeButton').textContent = 'Light Theme';
    } else {
        document.body.classList.remove('dark-theme');
        document.getElementById('themeButton').textContent = 'Dark Theme';
    }
}

// Call the function to apply the saved theme when the page loads
applySavedTheme();


document.getElementById('themeButton').addEventListener('click', function() {
    var body = document.body;
    var button = document.getElementById('themeButton');
    
    body.classList.toggle('dark-theme');
    
    // Save the current theme state to localStorage
    if (body.classList.contains('dark-theme')) {
        button.textContent = 'Light Theme'; // Change text when dark theme is active
        localStorage.setItem('theme', 'dark'); // Save dark theme preference
    } else {
        button.textContent = 'Dark Theme'; // Change text when light theme is active
        localStorage.setItem('theme', 'light'); // Save light theme preference
    }
});

// Hamburger menu toggle
document.getElementById('hamburger').addEventListener('click', function() {
    document.querySelector('.menu-container').classList.toggle('show');
});

// Dark mode toggle in the menu
document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    document.querySelector('.menu-container').classList.toggle('dark-theme');

    // Update button text and save the current state
    const isDarkMode = document.body.classList.contains('dark-theme');
    document.getElementById('dark-mode-toggle').textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';

    // Save the current theme state to localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

function nextSlide(carouselId) {
    const carousel = document.getElementById(carouselId);
    const slide = carousel.querySelector('.carousel-slide');
    let slides = slide.children; // Default to general slides

    // Special handling for music section
    if (carouselId === 'music-carousel') {
        slides = slide.querySelectorAll('.album'); // Target .album class for music
    }

    const totalSlides = slides.length;
    const currentIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));

    if (currentIndex === -1) {
        slides[0].classList.add('active');
    } else {
        slides[currentIndex].classList.remove('active');
        const nextIndex = (currentIndex + 1) % totalSlides;
        slides[nextIndex].classList.add('active');
        slide.style.transform = `translateX(-${nextIndex * 100 / totalSlides}%)`;
    }

    // Update the opacity for specific carousels
    if (carouselId === 'music-carousel') {
        updateSlideOpacity(slides);
    }
}

function prevSlide(carouselId) {
    const carousel = document.getElementById(carouselId);
    const slide = carousel.querySelector('.carousel-slide');
    let slides = slide.children; // Default to general slides

    // Special handling for music section
    if (carouselId === 'music-carousel') {
        slides = slide.querySelectorAll('.album'); // Target .album class for music
    }

    const totalSlides = slides.length;
    const currentIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));

    if (currentIndex === -1) {
        slides[0].classList.add('active');
    } else {
        slides[currentIndex].classList.remove('active');
        const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        slides[prevIndex].classList.add('active');
        slide.style.transform = `translateX(-${prevIndex * 100 / totalSlides}%)`;
    }

    // Update the opacity for specific carousels
    if (carouselId === 'music-carousel') {
        updateSlideOpacity(slides);
    }
}

function updateSlideOpacity(slides) {
    slides.forEach(slide => {
        if (slide.classList.contains('active')) {
            slide.querySelector('img').style.opacity = 1; // Fully opaque for active slide
        } else {
            slide.querySelector('img').style.opacity = 0.5; // Transparent for inactive slides
        }
    });
}


