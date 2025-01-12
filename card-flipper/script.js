const gameContainer = document.querySelector(".game-container");

// Variables
let clickedImgSrc = [];
let clickCards = [];

// Images
const images = [
  "img/palette.png",
  "img/palette.png",
  "img/565789.png",
  "img/565789.png",
  "img/1831908.png",
  "img/1831908.png",
  "img/2071669.png",
  "img/2071669.png",
  "img/2206009.png",
  "img/2206009.png",
  "img/11460836.png",
  "img/11460836.png",
  "img/11985971.png",
  "img/11985971.png",
  "img/815478.png",
  "img/815478.png",
  "img/846896.png",
  "img/846896.png",
  "img/1812505.png",
  "img/1812505.png",
  "img/2071665.png",
  "img/2071665.png",
  "img/2071778.png",
  "img/2071778.png",
  "img/2400597.png",
  "img/2400597.png",
  "img/3124967.png",
  "img/3124967.png",
  "img/3597168.png",
  "img/3597168.png",
  "img/3963777.png",
  "img/3963777.png",
  "img/4038552.png",
  "img/4038552.png",
  "img/4329079.png",
  "img/4329079.png",
  "img/4818270.png",
  "img/4818270.png",
  "img/4905925.png",
  "img/4905925.png",
  "img/7014920.png",
  "img/7014920.png",
  "img/7839827.png",
  "img/7839827.png",
  "img/7955492.png",
  "img/7955492.png",
  "img/7979076.png",
  "img/7979076.png",
  "img/8460006.png",
  "img/8460006.png",
  "img/9130402.png",
  "img/9130402.png",
  "img/10075352.png",
  "img/10075352.png",
  "img/10093896.png",
  "img/10093896.png",
  "img/10504191.png",
  "img/10504191.png",
  "img/11096665.png",
  "img/11096665.png",
  "img/11347044.png",
  "img/11347044.png",
  "img/11862012.png",
  "img/11862012.png",
];

/// Functions
// Display Cards on the page
const createCards = function (images) {
  images.forEach((img, i) => {
    const card = document.createElement("div");
    card.className = "card";
    gameContainer.append(card);
  });
};

createCards(images);

const shuffleImg = function (imgArr) {
  let currentIndex = imgArr.length;
  let randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [imgArr[currentIndex], imgArr[randomIndex]] = [
      imgArr[randomIndex],
      imgArr[currentIndex],
    ];
  }

  return imgArr;
};

const shuffledImages = shuffleImg(images);

// Click event handler for cards
const cardClickHandler = function (e, card, imgEl, i) {
  // Check if the card is already matched, if yes, return early
  if (card.classList.contains("matched")) {
    return;
  }

  card.classList.add("face-up");
  card.style.backgroundColor = "#eee";
  imgEl.src = shuffledImages[i];

  matchCards(e);
};

// Match cards
const matchCards = function (event) {
  if (event.target.tagName === "DIV") {
    clickCards.push(event.target);
    clickedImgSrc.push(event.target.querySelector("img").getAttribute("src"));
  } else {
    clickCards.push(event.target.parentNode);
    clickedImgSrc.push(event.target.getAttribute("src"));
  }

  if (clickedImgSrc.length === 2 && clickCards.length === 2) {
    if (clickedImgSrc[0] === clickedImgSrc[1]) {
      // console.log("There is a match!");
      clickCards.forEach((card) => {
        card.classList.add("matched");
        // Remove event listener
        card.removeEventListener("click", cardClickHandler);
      });
      clickedImgSrc = [];
      clickCards = [];
    } else {
      clickedImgSrc = [];
      setTimeout(() => {
        clickCards.forEach((card) => {
          card.classList.remove("face-up");
          card.querySelector("img").src = "";
          card.style.backgroundColor = "#fa5252";
        });
        clickCards = [];
      }, 500);
    }
  }
};

// Add images to cards
const cards = document.querySelectorAll(".card");
cards.forEach((card, i) => {
  const imgEl = document.createElement("img");
  card.append(imgEl);
  card.addEventListener("click", (e) => {
    cardClickHandler(e, card, imgEl, i);
    console.log("clicked");
  });
});
