"use strict";
const dropdownBtns = document.querySelectorAll(".dropdown-btn");

dropdownBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const dropdownItemsBox = btn
      .closest(".dropdown-box")
      .querySelector(".dropdown-items-box");
    const dropdownIcon = btn
      .closest(".dropdown-box")
      .querySelector(".dropdown-icon");
    dropdownItemsBox.classList.toggle("hidden");
    dropdownIcon.classList.toggle("dropdown-rotate");
  });
});

// Bubbel sort algorithm implementation
const sort = function (arr, reverse = false) {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (!reverse) {
        if (arr[i] > arr[j]) {
          temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      } else {
        if (arr[i] < arr[j]) {
          temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
  }
  return arr;
};

console.log(sort([78, 12, 102, 400, -5, 45], true));
