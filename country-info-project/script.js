const wrapper = document.querySelector(".wrapper");
const searchInput = document.querySelector(".search-input");
const searchIcon = document.querySelector(".search-icon");
const countriesContainer = document.querySelector(".countries-container");

searchInput.addEventListener("focus", (e) => {
  e.preventDefault();
  wrapper.classList.add("fade-up");
  wrapper.style.marginTop = "2rem";
  searchIcon.style.right = "16%";
  countriesContainer.classList.add("fadeIn");
});
