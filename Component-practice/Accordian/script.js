const accordionItems = document.querySelectorAll(".item");

accordionItems.forEach(function (item) {
  const question = item.querySelector(".question");
  const hiddenBox = item.querySelector(".hidden-box");
  const icon = item.querySelector(".icon");

  question.addEventListener("click", function () {
    question.classList.toggle("active");
    hiddenBox.classList.toggle("open");
    icon.classList.toggle("icon-rotate");
  });
});
