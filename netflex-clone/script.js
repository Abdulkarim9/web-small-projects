const accordions = document.querySelectorAll(".accordian-item");

accordions.forEach((accordion) => {
  const accordianAnswerBox = accordion.querySelector(".accordian-answer-box");
  const openIcon = accordion.querySelector(".open-icon");
  accordion.addEventListener("click", () => {
    accordianAnswerBox.classList.toggle("open");
    openIcon.classList.toggle("close-icon");
  });
});
