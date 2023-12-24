// const number = parseInt(prompt('Enter a number: '))
// switch (number) {
//     case 0:
//         document.write('zero')
//         break;
//     case 1:
//         document.write('one')
//         break;
//     case 2:
//         document.write('two')
//         break;
//     case 3:
//         document.write('three')
//         break;
//     case 4:
//         document.write('four')
//         break;
//     case 5:
//         document.write('five')
//         break;
//     case 6:
//         document.write('six')
//         break;
//     case 7:
//         document.write('seven')
//         break;
//     case 8:
//         document.write('eight')
//         break;
//     case 9:
//         document.write('nine')
//         break;
//     case 10:
//         document.write('Bad number')
// }
// document.write('<br>')
// const numberZugi = parseInt(prompt('Enter a number Odd / even: '))

// switch (numberZugi) {
//     case 2:
//     case 4:
//     case 6:
//     case 8:
//     case 10:
//         document.write('odd')
//         break;
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 9:
//         document.write('even')
//         break;
//     default:
// }

document.write('<br>')

let message = document.getElementById('message')
let PlayerElements = document.getElementById('my_cards')
let ComputerElements = document.getElementById('comp_cards')
let card_type = ['hearts', 'diamonds', 'clubs', 'spades']

let PlayerWins = 0
let ComputerWins = 0
let compCards = []
let myCards = []

let wait = (ms) => {
    const start = Date.now();
    let now = start;
    while (now - start < ms) {
        now = Date.now();
    }
}

let addCards = () => {

    PlayerElements.innerHTML = ''
    ComputerElements.innerHTML = ''

    myCards.forEach(card => {
        PlayerElements.appendChild(document.createElement('li')).appendChild(document.createElement('img')).src = card
    });
    compCards.forEach(card => {
        ComputerElements.appendChild(document.createElement('li')).appendChild(document.createElement('img')).src = card
    });
}

let getCard = (value, type) => {
    switch (value) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10: return '../src/cards/' + value + '_of_' + type + '.svg';
        case 11: return '../src/cards/' + 'jack_of_' + type + '.svg';
        case 12: return '../src/cards/' + 'queen_of_' + type + '.svg';
        case 13: return '../src/cards/' + 'king_of_' + type + '.svg';
        case 14: return '../src/cards/' + 'ace_of_' + type + '.svg';
        case 15: return '../src/cards/' + 'red_joker.svg';
    }
}

let PlayRound = () => {
    let compCard = Math.floor(Math.random() * 14) + 2
    let myCard = parseInt(prompt("what is your card?"))

    myCards.push(getCard(myCard, card_type[1]))
    compCards.push(getCard(compCard, card_type[2]))
}

let checkWinner = () => {
    let player = 0
    let computer = 0

    for (let i = 0; i < compCards.length; i++) {
        if (compCards[i] < myCards[i]) player++
        else if (compCards[i] > myCards[i]) computer++
        else { computer++; player++ }
    }

    let Winner  = player > computer ? 'Player' : player == computer? 'Tie' : 'Computer'
    return 'Player: ' + player + '\t| Computer: ' + computer +'\t|' + Winner+ ' is Winner'
}
let render = () => {
    addCards()
    message.innerHTML = checkWinner()
}
let PlayGame = (rounds) => {
    for (let i = 0; i < rounds; i++) {
        PlayRound()
        render()
        
    }
}

PlayGame(3)