var carouselImages = [
  "images/Fantasy_Island_Daniel_Cheong.jpg",
  "images/Sheep_in_the_woods_II_James_Mills.jpg",
  "images/Untitled_Jorge_Guadalupe_Lizarraga.jpg",
  "images/Europes_best_View_Fabian_Fortmann.jpg",
  "images/sunset_1663_Junji_Aoyama.jpg",
];
let currentImageIndex = 0;
let carouselInterval;

// Function to change the background image
function changeBackgroundImage() {
  let carousel = document.querySelector(".hero-carousel");
  carousel.style.backgroundImage =
    "url('" + carouselImages[currentImageIndex] + "')";

  currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
  console.log(currentImageIndex);
}

// Start the carousel
function startCarousel() {
  carouselInterval = setInterval(changeBackgroundImage, 8000); // Adjust the interval as needed
}

// Stop the carousel
function stopCarousel() {
  clearInterval(carouselInterval);
}

// Start the carousel when the page loads
window.onload = startCarousel;
