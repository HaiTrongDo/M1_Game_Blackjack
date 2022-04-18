
class Dealer {
    constructor() {
        this._score = 0; // để check win
        this.status = true;
        this._flagAce = false;// cắm cờ để kiểm tra A
        this._flagPicture = false // cắm cờ để kiểm tra blackjack
    }

    dealerRestart(){
        dealer.status = true;
        dealer._flagAce = false;
        dealer._doubleAceCheck = false;
        dealer._flagPicture = false;
        dealer._score = 0
    }
}