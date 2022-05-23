
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
    getValue(){
        return this.value
    }

    getHtml() {
        let html = `<img class="images" src="../CardImages/${this.value + "-" + this.suit}.png" 
                    alt="${this.value + "-" + this.suit}.png"
                    width="120px">`;
        return html;
    }
}