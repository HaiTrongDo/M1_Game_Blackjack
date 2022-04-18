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