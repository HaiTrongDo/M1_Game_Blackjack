class deckBuilder {
    constructor() {
        this.cards = []
    }

    cardsDeck() { // tạo ra mảng có chưa đối tuong Card {value: 'A', suit: 'H', score: 10}
        let cardValue = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K",];
        let cardSuit = ["H", "D", "S", "C"];

        for (let j = 0; j < cardSuit.length; j++) {
            for (let i = 0; i < cardValue.length; i++) {
                let card = new Card(cardValue[i], cardSuit[j]);
                this.cards.push(card);
            }
        }
    }

    shuffleDeck() {
        let m = this.cards.length;
        let temp;
        while(m){
            let j = Math.floor(Math.random() * m--)
            temp = this.cards[j]
            this.cards[j] = this.cards[m]
            this.cards[m] = temp
        }
    }

    getRandomCard() { // sau khi lấy ra 1 quân thì sẽ cắt bỏ trong bài
        let randomCard = Math.floor(Math.random() * this.cards.length)
        let storeRandomCard = this.cards[randomCard];
        this.cards.splice(randomCard, 1)
        return storeRandomCard;
    }
}

class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
        this.score = value;
        this.init();
    }

    init() {
        if (this.value === "A"|| this.value === "J" || this.value === "Q" || this.value === "K") {
            this.score = 10;
        } else {
            this.score = +this.value;
        }
    }

    getHtml() {
        let html = `<img class="images" src="CardImages/${this.value + "-" + this.suit}.png" 
                    alt="${this.value + "-" + this.suit}.png"
                    width="120px">`;
        return html;
    }
}

class Players {
    constructor (playerName,coinNumber) {
        this._name = playerName;
        this._score = 0; //để check win
        this._aliveStatus = true;
        this._flagAce = false;// cắm cờ để kiểm tra A
        this._flagPicture = false // cắm cờ để kiểm tra blackjack
        this._coins = coinNumber;
        this.bettingAmount = 0
    }
    betting(){
        this.bettingAmount = Number(prompt("Betting amount"))
        if (this.bettingAmount > this._coins || this.bettingAmount <= 0){
            alert(`You only can bet between 0 - $${this._coins} or lower `)
            Players.betting()
        }
        bettingEl.innerHTML = "Your Bet: " + this.bettingAmount
        Player1CoinsEl.innerHTML ="Your Coins: " + this._coins
    }
}

class Dealer {
    constructor() {
    this._score = 0; // để check win
    this.status = true;
    this._flagAce = false;// cắm cờ để kiểm tra A
    this._flagPicture = false // cắm cờ để kiểm tra blackjack
    }
}