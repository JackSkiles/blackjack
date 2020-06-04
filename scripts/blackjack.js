

var deck = [
    twoOfClubs = {point: 2, suit: 'clubs', source: 'JPEG/2C.jpg'},
    twoD = {point: 2, suit: 'diamonds', source: 'JPEG/2D.jpg'},
    twoH = {point: 2, suit: 'hearts', source: 'JPEG/2H.jpg'},
    twoS = {point: 2, suit: 'spades', source: 'JPEG/2S.jpg'},

    threeC = {point: 3, suit: 'clubs', source: 'JPEG/3C.jpg'},
    threeD = {point: 3, suit: 'diamonds', source: 'JPEG/3D.jpg'},
    threeH = {point: 3, suit: 'hearts', source: 'JPEG/3H.jpg'},
    threeS = {point: 3, suit: 'spades', source: 'JPEG/3S.jpg'},

    fourC = {point: 4, suit: 'clubs', source: 'JPEG/4C.jpg'},
    fourD = {point: 4, suit: 'diamonds', source: 'JPEG/4D.jpg'},
    fourH = {point: 4, suit: 'hearts', source: 'JPEG/4H.jpg'},
    fourS = {point: 4, suit: 'spades', source: 'JPEG/4S.jpg'},

    fiveC = {point: 5, suit: 'clubs', source: 'JPEG/5C.jpg'},
    fiveD = {point: 5, suit: 'diamonds', source: 'JPEG/5D.jpg'},
    fiveH = {point: 5, suit: 'hearts', source: 'JPEG/5H.jpg'},
    fiveS = {point: 5, suit: 'spades', source: 'JPEG/5S.jpg'},

    sixC = {point: 6, suit: 'clubs', source: 'JPEG/6C.jpg'},
    sixD = {point: 6, suit: 'diamonds', source: 'JPEG/6D.jpg'},
    sixH = {point: 6, suit: 'hearts', source: 'JPEG/6H.jpg'},
    sixS = {point: 6, suit: 'spades', source: 'JPEG/6S.jpg'},

    sevenC = {point: 7, suit: 'clubs', source: 'JPEG/7C.jpg'},
    sevenD = {point: 7, suit: 'diamonds', source: 'JPEG/7D.jpg'},
    sevenH = {point: 7, suit: 'hearts', source: 'JPEG/7H.jpg'},
    sevenS = {point: 7, suit: 'spades', source: 'JPEG/7S.jpg'},

    eightC = {point: 8, suit: 'clubs', source: 'JPEG/8C.jpg'},
    eightD = {point: 8, suit: 'diamonds', source: 'JPEG/8D.jpg'},
    eightH = {point: 8, suit: 'hearts', source: 'JPEG/8H.jpg'},
    eightS = {point: 8, suit: 'spades', source: 'JPEG/8S.jpg'},

    nineC = {point: 9, suit: 'clubs', source: 'JPEG/9C.jpg'},
    nineD = {point: 9, suit: 'diamonds', source: 'JPEG/9D.jpg'},
    nineH = {point: 9, suit: 'hearts', source: 'JPEG/9H.jpg'},
    nineS = {point: 9, suit: 'spades', source: 'JPEG/9S.jpg'},

    tenC = {point: 10, suit: 'clubs', source: 'JPEG/10C.jpg'},
    tenD = {point: 10, suit: 'diamonds', source: 'JPEG/10D.jpg'},
    tenH = {point: 10, suit: 'hearts', source: 'JPEG/10H.jpg'},
    tenS = {point: 10, suit: 'spades', source: 'JPEG/10S.jpg'},

    jackC = {point: 11, suit: 'clubs', source: 'JPEG/JC.jpg'},
    jackD = {point: 11, suit: 'diamonds', source: 'JPEG/JD.jpg'},
    jackH = {point: 11, suit: 'hearts', source: 'JPEG/JH.jpg'},
    jackS = {point: 11, suit: 'spades', source: 'JPEG/JS.jpg'},

    queenC = {point: 12, suit: 'clubs', source: 'JPEG/QC.jpg'},
    queenD = {point: 12, suit: 'diamonds', source: 'JPEG/QD.jpg'},
    queenH = {point: 12, suit: 'hearts', source: 'JPEG/QH.jpg'},
    queenS = {point: 12, suit: 'spades', source: 'JPEG/QS.jpg'},

    kingC = {point: 13, suit: 'clubs', source: 'JPEG/KC.jpg'},
    kingD = {point: 13, suit: 'diamonds', source: 'JPEG/KD.jpg'},
    kingH = {point: 13, suit: 'hearts', source: 'JPEG/KH.jpg'},
    kingS = {point: 13, suit: 'spades', source: 'JPEG/KS.jpg'},

    aceC = {point: 1, suit: 'clubs', source: 'JPEG/AC.jpg'},
    aceD = {point: 1, suit: 'diamonds', source: 'JPEG/AD.jpg'},
    aceH = {point: 1, suit: 'hearts', source: 'JPEG/AH.jpg'},
    aceS = {point: 1, suit: 'spades', source: 'JPEG/AS.jpg'},
];




const dealButton = document.getElementById('deal-button');
const hitButton = document.getElementById('hit-button');


const playerHand = document.getElementById('player-hand');
const dealerHand = document.getElementById('dealer-hand');

const scoreTally1 = document.getElementById('player-points2');
const scoreTally2 = document.getElementById('dealer-points2');

let hand1 = [];
let hand2 = [];

let playerScore = 0;

let win = false;

let playerWin = false;
let dealerWin = false;

function dealPlayer() {
    if (playerScore >= 50) {
        playerWin = true;
        win = true;
        alert("congratulations, you win!");
        location.reload();
    }
    if(win === false){
            playerHand.innerHTML = "";
            scoreTally1.innerHTML = "";
            const playerCard = document.createElement('img');        
            const playerCard2 = document.createElement('img');
            const playerCard3 = document.createElement('img');        
            const playerCard4 = document.createElement('img');
            const playerCard5 = document.createElement('img');
            const randomCard1 = Math.floor((Math.random() * deck.length));
            const randomCard2 = Math.floor((Math.random() * deck.length));
            const randomCard3 = Math.floor((Math.random() * deck.length));
            const randomCard4 = Math.floor((Math.random() * deck.length));
            const randomCard5 = Math.floor((Math.random() * deck.length));
            playerScore += deck[randomCard1].point;
            console.log(playerScore);
            playerCard.setAttribute('class', 'card')
            playerCard.setAttribute('src', deck[randomCard1].source);
            let card1 = deck.splice(randomCard1, 1);
            hand1.push(card1);
            playerCard2.setAttribute('class', 'card')
            playerCard2.setAttribute('src', deck[randomCard2].source);
            let card2 = deck.splice(randomCard2, 1);
            hand1.push(card2);
            playerScore += deck[randomCard2].point;
            console.log(playerScore);
            playerCard3.setAttribute('class', 'card')
            playerCard3.setAttribute('src', deck[randomCard3].source);
            let card3 = deck.splice(randomCard3, 1);
            hand1.push(card3);
            playerScore += deck[randomCard3].point;
            playerCard4.setAttribute('class', 'card')
            playerCard4.setAttribute('src', deck[randomCard4].source);
            let card4 = deck.splice(randomCard4, 1);
            hand1.push(card4);
            playerScore += deck[randomCard4].point;
            playerCard5.setAttribute('class', 'card')
            playerCard5.setAttribute('src', deck[randomCard5].source);
            let card5 = deck.splice(randomCard5, 1);
            hand1.push(card5);
            playerScore += deck[randomCard5].point;
            let stringScore = playerScore.toString();
            const score = document.createTextNode(stringScore);
            console.log(stringScore);
            playerHand.appendChild(playerCard);
            playerHand.appendChild(playerCard2);
            playerHand.appendChild(playerCard3);
            playerHand.appendChild(playerCard4);
            playerHand.appendChild(playerCard5);
            scoreTally1.appendChild(score);
    }

}

let dealerScore = 0;
function dealer() {
    if (dealerScore >= 50 && playerWin === false) {
        dealerWin = true;
        win = true;
        alert("You lose! Try again.");
        location.reload();
    }
    if (win === false) {
            dealerHand.innerHTML = "";
            scoreTally2.innerHTML = "";
            const dealerCard = document.createElement('img');
            const dealerCard2 = document.createElement('img');
            const dealerCard3 = document.createElement('img');
            const dealerCard4 = document.createElement('img');
            const dealerCard5 = document.createElement('img');
            const randomCard = Math.floor((Math.random() * deck.length));
            dealerCard.setAttribute('class', 'card')
            dealerCard.setAttribute('src', deck[randomCard].source);
            let card1 = deck.splice(randomCard, 1);
            hand2.push(card1);
            const randomCard2 = Math.floor((Math.random() * deck.length));
            dealerCard2.setAttribute('class', 'card')
            dealerCard2.setAttribute('src', deck[randomCard2].source);
            let card2 = deck.splice(randomCard2, 1);
            hand2.push(card2);
            const randomCard3 = Math.floor((Math.random() * deck.length));
            dealerCard3.setAttribute('class', 'card')
            dealerCard3.setAttribute('src', deck[randomCard3].source);
            let card3 = deck.splice(randomCard3, 1);
            hand2.push(card3);
            const randomCard4 = Math.floor((Math.random() * deck.length));
            dealerCard4.setAttribute('class', 'card')
            dealerCard4.setAttribute('src', deck[randomCard4].source);
            let card4 = deck.splice(randomCard4, 1);
            hand2.push(card4);
            const randomCard5 = Math.floor((Math.random() * deck.length));
            dealerCard5.setAttribute('class', 'card')
            dealerCard5.setAttribute('src', deck[randomCard5].source);
            let card5 = deck.splice(randomCard5, 1);
            hand2.push(card5);
            dealerScore += deck[randomCard].point;
            dealerScore += deck[randomCard2].point;
            dealerScore += deck[randomCard3].point;
            dealerScore += deck[randomCard4].point;
            dealerScore += deck[randomCard5].point;
            let stringScore = playerScore.toString();
            const score = document.createTextNode(stringScore);
            console.log(dealerScore);
            dealerHand.appendChild(dealerCard);
            dealerHand.appendChild(dealerCard2);
            dealerHand.appendChild(dealerCard3);
            dealerHand.appendChild(dealerCard4);
            dealerHand.appendChild(dealerCard5);
            scoreTally2.appendChild(score);
    }
}

function hitCards() {
    const randomCard1 = Math.floor((Math.random() * deck.length));
    const playerCard = document.createElement('img');
    playerCard.setAttribute('src', deck[randomCard1].source);
    playerCard.setAttribute('class', 'card')
    playerHand.appendChild(playerCard)
}

dealButton.addEventListener('click', dealPlayer);
dealButton.addEventListener('click', dealer);

hitButton.addEventListener('click', hitCards);
