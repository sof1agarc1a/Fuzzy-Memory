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


const startGame = document.querySelector('.button')



startGame.addEventListener('click', () => {
  const minutes = document.querySelector(".minutes")
  const seconds = document.querySelector(".seconds")
  const startGameNoDisplay = document.querySelector('.start-game')

  startGame.classList.add('display');
  startGameNoDisplay.classList.add('display');
  const container = document.querySelector('.container');

  let points = 0;
  let moves = 0;

  function addAnimation() {
    let newCards = document.querySelectorAll(".cards");
    if(newCards[0]) {
      newCards[0].className = "replay-animation";
      setTimeout(addAnimation, 60);
    }
  }
  setTimeout(addAnimation, 400);

  setTimeout(() => {
    let replaceAll = document.querySelectorAll(".replay-animation");
    replaceAll.forEach(replace => replace.classList.add('cards'));
    replaceAll.forEach(replace => replace.classList.remove('replay-animation'));
  }, 2000);

  const shuffleCards = cardsDiv.sort(() => {
      return Math.random() - Math.random();
  });
  shuffleCards.forEach(cardDiv => {
      const createCard = (img, nr) => {
        return `
        <div class="cards display" data-number="${nr}">
        <img class="front-card" src="images/frontCard.png" alt="error">
        <img class="hidden-card" src="${img}" alt="error">
        </div>`;
      };
      container.innerHTML += (createCard(cardDiv.img, cardDiv.nr));
  });
  const hideCards = document.querySelectorAll('.cards')

  let count = 0, second = 0, minute = 0, hour = 0;
  let timer = document.querySelector(".timer");
  let interval;
  function startTimer(){
    interval = setInterval(function(){
      count += 1;
      minutes.innerHTML = Math.floor(count/60).toString().padStart(2, "0");
      seconds.innerHTML = (count%60).toString().padStart(2, "0");
    },1000);
  }
  startTimer();

  let score2 = document.querySelector(".scoreboard");
  let time2 = document.querySelector(".time");
  let moves2 = document.querySelector(".moves");
  let result2 = document.querySelector(".result");
  score2.classList.add('display');
  time2.classList.add('display');
  moves2.classList.add('display');
  result2.classList.add('display');

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

  function checkCardMatch() {
    if(firstClick.dataset.number != secondClick.dataset.number) {
      disableClickCard = true;
      setTimeout(() => {
        firstClick.classList.remove('card-click');
        secondClick.classList.remove('card-click');
        resetClick();
        moves++;
    }, 900);
    } else {
      resetClick();
      points++;
      moves++;

      if(points === 8) {
        let minutes = document.querySelector(".minutes");
        let seconds = document.querySelector(".seconds");
        let time = document.querySelector(".time");
        let moves2 = document.querySelector(".moves");
        time.innerHTML = "Time: "+count+"s";
        moves2.innerHTML = "Moves: "+ moves;

        setTimeout(() => {
          setTimeout(() => {
            let score = document.querySelector(".scoreboard");
            score.classList.remove('display');
          }, 1000);
          setTimeout(() => {
            let time = document.querySelector(".time");
            time.classList.remove('display');
          }, 1400);
          setTimeout(() => {
            let moves = document.querySelector(".moves");
            moves.classList.remove('display');
          }, 1800);
          setTimeout(() => {
            let result = document.querySelector(".result");
            result.classList.remove('display');
          }, 2200);
        }, 6000);

        count = 0;
        second = 0;
        minute = 0;
        hour = 0;
        minutes.innerHTML = "00";
        seconds.innerHTML = "00";
        clearInterval(interval);

        function addClass() {
          let winwin = document.querySelectorAll(".cards");
          if(winwin[0]) {
            winwin[0].className = "winwin";
            setTimeout(addClass, 70);
          }
        }
        setTimeout(addClass, 1300);
        const startGame = document.querySelector('.button')
        const startGameNoDisplay = document.querySelector('.start-game')
        startGame.textContent = "Play again!!!!!";
        setTimeout(() => {
          let winDisplayNone = document.querySelectorAll(".winwin");
          winDisplayNone.forEach(replace => replace.classList.add('display'));
          startGame.classList.remove('display');
          startGameNoDisplay.classList.remove('display');
          container.innerHTML = "";
        }, 5700);
      }
    }
  };
  function resetClick() {
    [clicked, disableClickCard] = [false, false];
    [firstClick, secondClick] = [null, null];
  }
});
