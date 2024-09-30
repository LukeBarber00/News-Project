document.addEventListener("DOMContentLoaded", function() {
    const hamburgerIcon = document.getElementById('hamburger');
    const navList = document.querySelector('nav ul');

    if (hamburgerIcon && navList) {
        hamburgerIcon.addEventListener('click', function() {
            navList.classList.toggle('active');
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const photos = document.querySelectorAll('.photo');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;

    // Function to show the current photo
    function showPhoto(index) {
        photos.forEach((photo, i) => {
            photo.classList.toggle('active', i === index); // Use classList.toggle to manage active class
        });
    }

    // Event listener for the Previous button
    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex === 0) ? photos.length - 1 : currentIndex - 1;
        showPhoto(currentIndex);
    });

    // Event listener for the Next button
    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex === photos.length - 1) ? 0 : currentIndex + 1;
        showPhoto(currentIndex);
    });

    // Show the first photo initially
    showPhoto(currentIndex);
});

