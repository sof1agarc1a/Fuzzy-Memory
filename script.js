'use strict';

const cards = [
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

// cards.sort(function() {
//   return Math.random() - Math.random()
// });

const container = document.querySelector('.container');

for(let card of cards) {
  const createCard = (img, datanumber) => {
    return `
    <div class="cards" data-card="${datanumber}">
      <img class="front-card" src="images/frontCard.png" alt="error">
      <img class="hidden-card" src="${img}" alt="error">
    </div>`;
  };
  container.innerHTML += (createCard(card.img, card.nr));
};
