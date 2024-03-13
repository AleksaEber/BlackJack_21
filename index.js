let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) +1
    if( randomCard > 10){
        return 10
    } else if(randomCard === 1) {
        return 11
    } else {
        return randomCard
    } 
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [ firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}

function newCard() {
    if(isAlive === true && hasBlackJack === false){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }
}