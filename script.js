'use strict';

const cardsDiv = [
  { img: 'images/spongebob.jpg', nr: 1 },
  { img: 'images/squidward.jpg', nr: 2 },
  { img: 'images/patrick.jpg', nr: 3 },
  { img: 'images/gary.jpg', nr: 4 },
  { img: 'images/mr_krabs.png', nr: 5 },
  { img: 'images/pearl.jpg', nr: 6 },
  { img: 'images/plankton.png', nr: 7 },
  { img: 'images/sandy.png', nr: 8 },
  { img: 'images/spongebob.jpg', nr: 1 },
  { img: 'images/squidward.jpg', nr: 2 },
  { img: 'images/patrick.jpg', nr: 3 },
  { img: 'images/gary.jpg', nr: 4 },
  { img: 'images/mr_krabs.png', nr: 5 },
  { img: 'images/pearl.jpg', nr: 6 },
  { img: 'images/plankton.png', nr: 7 },
  { img: 'images/sandy.png', nr: 8 },
];

let shuffle = cardsDiv.sort(() => Math.random() - Math.random());

const container = document.querySelector('.container');

for(let cardDiv of cardsDiv) {
  const createCard = (img, nr) => {
    return `
    <div class="display cards" data-number="${nr}">
      <img class="front-card" src="images/frontCard.png" alt="error">
      <img class="hidden-card" src="${img}" alt="error">
    </div>`;
  };
  container.innerHTML += (createCard(cardDiv.img, cardDiv.nr));
};


const startGame = document.querySelector('.start-game')

const hideCards = document.querySelectorAll('.cards')

startGame.addEventListener('click', () => {
  const minutes = document.querySelector(".minutes")
  const seconds = document.querySelector(".seconds")
  startGame.classList.add('display');

  hideCards.forEach(hiddenCard => hiddenCard.classList.remove('display'));

  let count = 0;
  const timer = () => {
    count += 1;
    minutes.innerHTML = Math.floor(count/60).toString().padStart(2, "0");
    seconds.innerHTML = (count%60).toString().padStart(2, "0");
  }
  const getTime = setInterval(timer, 1000);
});

const cards = document.querySelectorAll('.cards');

cards.forEach(card => card.addEventListener('click', clickCard));

let clicked = false;
let firstClick, secondClick;
let disableClickCard = false;

function clickCard() {
  if(disableClickCard) return;
  if(this === firstClick) return;
  this.classList.add('card-click');

  if(clicked === false) {
    clicked = true;
    firstClick = this;

  } else {
    secondClick = this;
    checkCardMatch();
  }
};

let points = 0;

function checkCardMatch() {
  if(firstClick.dataset.number != secondClick.dataset.number) {
    disableClickCard = true;
    setTimeout(() => {
    firstClick.classList.remove('card-click');
    secondClick.classList.remove('card-click');
    resetClick();
  }, 900);
  } else {
    resetClick();
    points++;

    if(points === 1) {
      function addClass() {
        let winwin = document.querySelectorAll(".cards");
        if(winwin[0]) {
          winwin[0].className = "winwin";
          setTimeout(addClass, 70);
        }
      }
      setTimeout(addClass, 1000);

          const replayButton = document.querySelector('.replay-button')
          const replayGame = document.querySelector('.replay')

          setTimeout(() => {
            let winDisplayNone = document.querySelectorAll(".winwin");
            winDisplayNone.forEach(replace => replace.classList.add('display'));

            replayGame.classList.remove('display');
            replayButton.classList.remove('display');
          }, 3400);

          replayButton.addEventListener('click', () => {



            replayGame.classList.add('display');
            points = 0;

              function addAnimation() {
                let winwin = document.querySelectorAll(".winwin");
                if(winwin[0]) {
                  winwin[0].className = "replay-animation";
                  setTimeout(addAnimation, 70);
                }
              }
              setTimeout(addAnimation, 10);

              setTimeout(() => {
                let replaceAll = document.querySelectorAll(".replay-animation");
                replaceAll.forEach(replace => replace.classList.add('cards'));
                replaceAll.forEach(replace => replace.classList.remove('replay-animation'));

                // shuffle.sort(() => Math.random() - Math.random());

              }, 2200);



        });
      }
    }
  };

function resetClick() {
  [clicked, disableClickCard] = [false, false];
  [firstClick, secondClick] = [null, null];
}
