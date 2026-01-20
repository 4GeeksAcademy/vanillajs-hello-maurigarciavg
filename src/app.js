import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";



window.onload = function () {

  const card = document.querySelector(".card");
  const button = document.querySelector("button");
  const palo = [
    { symbol: '♠', name: 'spade', color: 'black' },
    { symbol: '♣', name: 'club', color: 'black' },
    { symbol: '♥', name: 'heart', color: 'red' },
    { symbol: '♦', name: 'diamond', color: 'red' }
  ];
  const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  function randomNumbers(max) {
    return Math.floor(Math.random() * max);
  }

  function generateRandomCard() {
    const paloRandomIndex = randomNumbers(palo.length);
    const paloRandom = palo[paloRandomIndex];
    const randomValueIndex = randomNumbers(values.length);
    const randomValue = values[randomValueIndex];

    console.log("Carta generada: ", randomValue + paloRandom.symbol);
    return { paloRandom, randomValue };


  }


  generateRandomCard();

  function renderCard(palo, value) {
    const paloIzq = card.querySelector('.paloIzq');
    const number = card.querySelector('.number');
    const paloDcha = card.querySelector('.paloDcha');

    paloIzq.textContent = palo.symbol;
    paloDcha.textContent = palo.symbol;
    number.textContent = value;

    card.className = 'card';
    card.classList.add(palo.color);


    console.log('Carta renderizada:', value + palo.symbol, '(' + palo.color + ')');
  }




  const cardData = generateRandomCard();
  renderCard(cardData.paloRandom, cardData.randomValue);

  button.addEventListener("click", () => {
    const newCard = generateRandomCard();
    renderCard(newCard.paloRandom, newCard.randomValue);

});

  };
