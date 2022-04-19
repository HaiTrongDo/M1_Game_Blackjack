
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
    betting(money){
        // this.bettingAmount = Number(prompt("Betting amount"))
        this.bettingAmount += money;
        if (this.bettingAmount > this._coins || this.bettingAmount <= 0){
            alert(`You only can bet between 0 - $${this._coins} or lower `)
            this.betting()
        }
        bettingEl.innerHTML = "Your Bet: " + this.bettingAmount
        Player1CoinsEl.innerHTML ="Your Coins: " + this._coins
    }

    playerRestart(){
        Player1._flagAce = false;
        Player1._doubleAceCheck = false;
        Player1._flagPicture = false; //reset lại cờ
        Player1.bettingAmount = 0;
        Player1._aliveStatus = false;
    }
}
