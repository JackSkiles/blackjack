
var deck = [
    twoOfClubs = {point: 2, suit: 'clubs', source: 'JPEG/2C.jpg'},
    twoD = {point: 2, suit: 'diamonds', source: 'JPEG/2D.jpg'},
    twoH = {point: 2, suit: 'hearts', source: 'JPEG/2H.jpg'},
    twoS = {point: 2, suit: 'spades', source: 'JPEG/2S.jpg'},

    threeC = {point: 3, suit: 'clubs', source: 'JPEG/3C.jpg'},
    threeD = {point: 3, suit: 'diamonds', source: 'JPEG/3D.jpg'},
    threeH = {point: 3, suit: 'hearts', source: 'JPEG/3H.jpg'},
    threeS = {point: 3, suit: 'spades', source: 'JPEG/3S.jpg'},

//     fourC = {point: 4, suit: 'clubs', source: 'JPEG/4C.jpg'},
//     fourD = {point: 4, suit: 'diamonds', source: 'JPEG/4D.jpg'},
//     fourH = {point: 4, suit: 'hearts', source: 'JPEG/4H.jpg'},
//     fourS = {point: 4, suit: 'spades', source: 'JPEG/4S.jpg'},

//     fiveC = {point: 5, suit: 'clubs', source: 'JPEG/5C.jpg'},
//     fiveD = {point: 5, suit: 'diamonds', source: 'JPEG/5D.jpg'},
//     fiveH = {point: 5, suit: 'hearts', source: 'JPEG/5H.jpg'},
//     fiveS = {point: 5, suit: 'spades', source: 'JPEG/5S.jpg'},

//     sixC = {point: 6, suit: 'clubs', source: 'JPEG/6C.jpg'},
//     sixD = {point: 6, suit: 'diamonds', source: 'JPEG/6D.jpg'},
//     sixH = {point: 6, suit: 'hearts', source: 'JPEG/6H.jpg'},
//     sixS = {point: 6, suit: 'spades', source: 'JPEG/6S.jpg'},

//     sevenC = {point: 7, suit: 'clubs', source: 'JPEG/7C.jpg'},
//     sevenD = {point: 7, suit: 'diamonds', source: 'JPEG/7D.jpg'},
//     sevenH = {point: 7, suit: 'hearts', source: 'JPEG/7H.jpg'},
//     sevenS = {point: 7, suit: 'spades', source: 'JPEG/7S.jpg'},

//     eightC = {point: 8, suit: 'clubs', source: 'JPEG/8C.jpg'},
//     eightD = {point: 8, suit: 'diamonds', source: 'JPEG/8D.jpg'},
//     eightH = {point: 8, suit: 'hearts', source: 'JPEG/8H.jpg'},
//     eightS = {point: 8, suit: 'spades', source: 'JPEG/8S.jpg'},

//     nineC = {point: 9, suit: 'clubs', source: 'JPEG/9C.jpg'},
//     nineD = {point: 9, suit: 'diamonds', source: 'JPEG/9D.jpg'},
//     nineH = {point: 9, suit: 'hearts', source: 'JPEG/9H.jpg'},
//     nineS = {point: 9, suit: 'spades', source: 'JPEG/9S.jpg'},

//     tenC = {point: 10, suit: 'clubs', source: 'JPEG/10C.jpg'},
//     tenD = {point: 10, suit: 'diamonds', source: 'JPEG/10D.jpg'},
//     tenH = {point: 10, suit: 'hearts', source: 'JPEG/10H.jpg'},
//     tenS = {point: 10, suit: 'spades', source: 'JPEG/10S.jpg'},

//     jackC = {point: 11, suit: 'clubs', source: 'JPEG/JC.jpg'},
//     jackD = {point: 11, suit: 'diamonds', source: 'JPEG/JD.jpg'},
//     jackH = {point: 11, suit: 'hearts', source: 'JPEG/JH.jpg'},
//     jackS = {point: 11, suit: 'spades', source: 'JPEG/JS.jpg'},

//     queenC = {point: 12, suit: 'clubs', source: 'JPEG/QC.jpg'},
//     queenD = {point: 12, suit: 'diamonds', source: 'JPEG/QD.jpg'},
//     queenH = {point: 12, suit: 'hearts', source: 'JPEG/QH.jpg'},
//     queenS = {point: 12, suit: 'spades', source: 'JPEG/QS.jpg'},

//     kingC = {point: 13, suit: 'clubs', source: 'JPEG/KC.jpg'},
//     kingD = {point: 13, suit: 'diamonds', source: 'JPEG/KD.jpg'},
//     kingH = {point: 13, suit: 'hearts', source: 'JPEG/KH.jpg'},
//     kingS = {point: 13, suit: 'spades', source: 'JPEG/KS.jpg'},

//     aceC = {point: 1, suit: 'clubs', source: 'JPEG/AC.jpg'},
//     aceD = {point: 1, suit: 'diamonds', source: 'JPEG/AD.jpg'},
//     aceH = {point: 1, suit: 'hearts', source: 'JPEG/AH.jpg'},
//     aceS = {point: 1, suit: 'spades', source: 'JPEG/AS.jpg'},
];

const randomCard1 = Math.floor((Math.random() * 10));
console.log(deck)
console.log(deck[randomCard1]);

deck.splice(randomCard1, 1);

console.log(deck)