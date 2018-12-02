'use strict';

const cards = [
  { name: 'SpongeBob', color: '#ffb3ba', nr: 1 },
  { name: 'Patrick', color: '#FFF9C7', nr: 2 },
  { name: 'Squidward', color: '#ffdfba', nr: 3 },
  { name: 'Gary', color: '#FF4859', nr: 4 },
  { name: 'Plankton', color: '#FF9145', nr: 5 },
  { name: 'Pearl', color: '#D7BDFF', nr: 6 },
  { name: 'Sandy', color: 'pink', nr: 7 },
  { name: 'Mr. Krabs', color: 'red', nr: 8 },
  { name: 'SpongeBob', color: '#ffb3ba', nr: 1 },
  { name: 'Patrick', color: '#FFF9C7', nr: 2 },
  { name: 'Squidward', color: '#ffdfba', nr: 3 },
  { name: 'Gary', color: '#FF4859', nr: 4 },
  { name: 'Plankton', color: '#FF9145', nr: 5 },
  { name: 'Pearl', color: '#D7BDFF', nr: 6 },
  { name: 'Mrs. Puff', color: 'pink', nr: 7 },
  { name: 'Mr. Krabs', color: 'red', nr: 8 },
  { name: 'hidden picture', }
];

cards.sort(function() {
  return Math.random() - Math.random()
});

const container = document.querySelector('.container');

for(let card of cards) {
  const createCard = (color, title, number) => {
    return `
    <div class="cards" data-card="${number}">
      <p class="card"> ${title} </p>
      <p class="card"> ${color} </p>
    </div>`;

  };
  container.innerHTML += (createCard(card.color, card.name, card.nr));
};


// för att "vända" kortet, gör div mindre, sen större och byt färg vid klick?
