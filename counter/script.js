const hourEL = document.querySelector(".hour");
const minuteEL = document.querySelector(".minute");
const secondEL = document.querySelector(".second");
const millisecondEL = document.querySelector(".millisecond");
const btnStart = document.querySelector(".btn--start");
const btnStop = document.querySelector(".btn--stop");
const btnReset = document.querySelector(".btn--reset");

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

const startCounter = function () {
  millisecond++;
  if (millisecond === 1000) {
    millisecond = 0;
    second++;

    if (second === 60) {
      second = 0;
      minute++;

      if (minute === 60) {
        minute = 0;
        hour++;

        if (hour === 24) {
          hour = 0;
        }
      }
    }
  }
  millisecondEL.textContent = `${millisecond}`.padStart(4, "0");
  secondEL.textContent = `${second}`.padStart(2, "0");
  minuteEL.textContent = `${minute}`.padStart(2, "0");
  hourEL.textContent = `${hour}`.padStart(2, "0");
};

// Event Handlers

let timer;

btnStart.addEventListener("click", function () {
  timer = setInterval(startCounter, 0);
});

btnStop.addEventListener("click", function () {
  clearInterval(timer);
});

btnReset.addEventListener("click", function () {
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;

  millisecondEL.textContent = `${millisecond}`.padStart(4, "0");
  secondEL.textContent = `${second}`.padStart(2, "0");
  minuteEL.textContent = `${minute}`.padStart(2, "0");
  hourEL.textContent = `${hour}`.padStart(2, "0");
});
