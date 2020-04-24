

var deck = [
    twoOfClubs = {point: 2, suit: 'clubs'},
    twoD = {point: 2, suit: 'diamonds'},
    twoH = {point: 2, suit: 'hearts'},
    twoS = {point: 2, suit: 'spades'},

    threeC = {point: 3, suit: 'clubs'},
    threeD = {point: 3, suit: 'diamonds'},
    threeH = {point: 3, suit: 'hearts'},
    threeS = {point: 3, suit: 'spades'},

    fourC = {point: 4, suit: 'clubs'},
    fourD = {point: 4, suit: 'diamonds'},
    fourH = {point: 4, suit: 'hearts'},
    fourS = {point: 4, suit: 'spades'},

    fiveC = {point: 5, suit: 'clubs'},
    fiveD = {point: 5, suit: 'diamonds'},
    fiveH = {point: 5, suit: 'hearts'},
    fiveS = {point: 5, suit: 'spades'},

    sixC = {point: 6, suit: 'clubs'},
    sixD = {point: 6, suit: 'diamonds'},
    sixH = {point: 6, suit: 'hearts'},
    sixS = {point: 6, suit: 'spades'},

    sevenC = {point: 7, suit: 'clubs'},
    sevenD = {point: 7, suit: 'diamonds'},
    sevenH = {point: 7, suit: 'hearts'},
    sevenS = {point: 7, suit: 'spades'},

    eightC = {point: 8, suit: 'clubs'},
    eightD = {point: 8, suit: 'diamonds'},
    eightH = {point: 8, suit: 'hearts'},
    eightS = {point: 8, suit: 'spades'},

    nineC = {point: 9, suit: 'clubs'},
    nineD = {point: 9, suit: 'diamonds'},
    nineH = {point: 9, suit: 'hearts'},
    nineS = {point: 9, suit: 'spades'},

    tenC = {point: 10, suit: 'clubs'},
    tenD = {point: 10, suit: 'diamonds'},
    tenH = {point: 10, suit: 'hearts'},
    tenS = {point: 10, suit: 'spades'},

    jackC = {point: 11, suit: 'clubs'},
    jackD = {point: 11, suit: 'diamonds'},
    jackH = {point: 11, suit: 'hearts'},
    jackS = {point: 11, suit: 'spades'},

    queenC = {point: 12, suit: 'clubs'},
    queenD = {point: 12, suit: 'diamonds'},
    queenH = {point: 12, suit: 'hearts'},
    queenS = {point: 12, suit: 'spades'},

    kingC = {point: 13, suit: 'clubs'},
    kingD = {point: 13, suit: 'diamonds'},
    kingH = {point: 13, suit: 'hearts'},
    kingS = {point: 13, suit: 'spades'},

    aceC = {point: 1, suit: 'clubs'},
    aceD = {point: 1, suit: 'diamonds'},
    aceH = {point: 1, suit: 'hearts'},
    aceS = {point: 1, suit: 'spades'},
];


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
