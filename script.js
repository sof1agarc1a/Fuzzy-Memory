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

const container = document.querySelector('.container');
for(let cardDiv of cardsDiv) {
  const createCard = (img, nr) => {
    return `
    <div class="cards" data-number="${nr}">
      <img class="front-card" src="images/frontCard.png" alt="error">
      <img class="hidden-card" src="${img}" alt="error">
    </div>`;
  };
  container.innerHTML += (createCard(cardDiv.img, cardDiv.nr));
};


const startGame = document.querySelector('.start-game')



startGame.addEventListener('click', () => {
  const minutes = document.querySelector(".minutes")
  const seconds = document.querySelector(".seconds")
  let count = 0;
  const timer = () => {
    count += 1;
    minutes.innerHTML = Math.floor(count/60).toString().padStart(2, "0");
    seconds.innerHTML = (count%60).toString().padStart(2, "0");
  }
  const getTime = setInterval(timer, 1000);

  startGame.classList.add('display');
});



const cards = document.querySelectorAll('.cards');



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
    firstClick.removeEventListener('click', clickCard);
    secondClick.removeEventListener('click', clickCard);
    resetClick();
    points++;

    if(points === 1) {
      function addClass() {
        clearInterval(timer);
        let winwin = document.querySelectorAll(".cards");
        if(winwin[0]) {
          winwin[0].className = "winwin";
          setTimeout(addClass, 80);

          if(winwin.className === "winwin") {
            console.log(winwin);
            winwin.classList.add('display');

          }
        }
      }
      // let winwin = document.querySelector(".cards");
      setTimeout(addClass, 1000);
      // winwin.classList.add('cards');


      // let cardsBack = document.querySelector(".winwin");
      // console.log(cardsBack);
      // cardsBack.classList.remove('winwin');
    }
  }
};



function resetClick() {
  [clicked, disableClickCard] = [false, false];
  [firstClick, secondClick] = [null, null];
}

// (function shuffle() {
//   cards.forEach(card => {
//     let randomOrder = Math.floor(Math.random() * 16);
//     card.style.order = randomOrder;
//   });
// })();

cards.forEach(card => card.addEventListener('click', clickCard));
