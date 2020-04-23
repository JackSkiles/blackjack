
const dealButton = document.getElementById('deal-button');
const hitButton = document.getElementById('hit-button');


const playerHand = document.getElementById('player-hand');
const dealerHand = document.getElementById('dealer-hand');

function dealCards() {
    const playerCard = document.createElement('img');
    const dealerCard = document.createElement('img');
    const playerCard2 = document.createElement('img');
    const dealerCard2 = document.createElement('img');
    playerCard.setAttribute('src', 'JPEG/2C.jpg');
    playerCard2.setAttribute('src', 'JPEG/2H.jpg');
    playerCard.setAttribute('class', 'card')
    playerCard2.setAttribute('class', 'card')
    dealerCard.setAttribute('src', 'JPEG/5H.jpg');
    dealerCard2.setAttribute('src', 'JPEG/9C.jpg');
    dealerCard.setAttribute('class', 'card')
    dealerCard2.setAttribute('class', 'card')
    playerHand.appendChild(playerCard);
    dealerHand.appendChild(dealerCard);
    playerHand.appendChild(playerCard2);
    dealerHand.appendChild(dealerCard2);

}

function hitCards() {
    const playerCard = document.createElement('img');
    playerCard.setAttribute('src', 'JPEG/AD.jpg');
    playerCard.setAttribute('class', 'card')
    playerHand.appendChild(playerCard)
}

dealButton.addEventListener('click', dealCards);

hitButton.addEventListener('click', hitCards);
