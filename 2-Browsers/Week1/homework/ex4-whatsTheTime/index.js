'use strict';

/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
const div = document.createElement('div');
div.style.height = '800px';
div.style.display = 'flex';
div.style.justifyContent = 'center';
div.style.alignItems = 'center';

const time = document.createElement('h2');
time.style.fontSize = '100px';
div.appendChild(time);
document.body.appendChild(div);

function addCurrentTime() {
  // TODO complete this function
  const date = new Date();

  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const seconds =
    date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();

  const timeFormatted = `${hours}:${minutes}:${seconds}`;

  time.textContent = timeFormatted;
  console.log(timeFormatted);
}

const updatingDate = () => {
  setInterval(() => {
    addCurrentTime();
  }, 1000);
};
// TODO execute `addCurrentTime` when the browser has completed loading the page
window.addEventListener('load', updatingDate);
