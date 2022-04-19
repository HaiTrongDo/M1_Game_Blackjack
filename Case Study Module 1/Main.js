const MAX_SCORE = 21;
const MIN_DEALER_SCORE = 17;
let currentUser = JSON.parse(localStorage.getItem('currentUser'));
let PLAYER_NAME = currentUser.name;
// let PLAYER_NAME = "Mr.Do"//prompt("Please Enter Your Name")
let playerNameEl = document.getElementById("playerName-El")
playerNameEl.innerText = `Welcome ${PLAYER_NAME.toUpperCase()} to the BlackJack Game`
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let yourCardEl = document.getElementById("yourCard-el")
let dealerCardEl = document.getElementById("dealerCard-el")
let dealerSumEl = document.getElementById("dealerSum-el")
let startBtnEl = document.getElementById("Start-El")
let hitBtnEl = document.getElementById("hitBtn-El")
let stayBtnEl = document.getElementById("stayBtn-El")
let bettingEl = document.getElementById("betting-el")
let Player1CoinsEl = document.getElementById("Player1Coins-el")
let backCard = `<img src="CardImages/BACK.png" width='120px' alt="Back of the card">`
let deck = new deckBuilder();
let Player1 = new Players(currentUser.name, currentUser.money);
let dealer = new Dealer()
let cardPlayer = []
let cardDealer = []

function startGame() {
    if (deck.cards.length === 0) { // nếu đã tồn tại bài rồi thì không được bấn start button nữa
        Player1.betting()
        deck.cardsDeck();
        deck.shuffleDeck();
        cardPlayer.push(deck.getRandomCard(), deck.getRandomCard());
        showListCardPlayer();
        messageEl.innerHTML = "Do you want more cards?"
        dealerCardEl.innerHTML = `Dealer Card(s): <br> ${backCard} ${backCard}`;
        dealerSumEl.innerHTML = "Dealer's sum:"
        if (Player1._flagAce && Player1._flagPicture) {
            alert("You have a Blackjack")
        }
        //xóa message chào đón người chơi
        playerNameEl.innerText = ""
    } else { //nếu bài đã được tạo thì tức là game đang chay, khi này hướng dẫn người chơi chọn hit/stay
        alert(`Game is on going, press "Hit" or "Stay" button of your choise`)
    }
}


function hit() {
    if (deck.cards.length === 0) {
        alert("You have to start the game first")
    } else {
        let cardHit = deck.getRandomCard();
        cardPlayer.push(cardHit);
        showListCardPlayer();
    }
}

function showListCardPlayer() {
    let player1SumCardsValue = 0;
    let html = ''
    for (let i = 0; i < cardPlayer.length; i++) {
        player1SumCardsValue += cardPlayer[i].score;
        html += cardPlayer[i].getHtml() + " ";
        // if( cardPlayer[i].value === "A" && )
        if (cardPlayer[i].getValue() === "A") { // cắm cờ để phát hiện bài có A để tính điểm khác đi
            Player1._flagAce = true;
        }
        if (cardPlayer[i].getValue() === "J"
            || cardPlayer[i].getValue() === "Q"
            || cardPlayer[i].getValue() === "K") { // cắm cờ để phát hiện bài có A để tính điểm khác đi
            Player1._flagPicture = true;
        }
    }
    if (player1SumCardsValue > 21) {// kiểm tra nếu lớn hơn 21 điếm thì "A" có thể được tính là 1 thay vì 10 điểm
        if (Player1._flagAce) {
            player1SumCardsValue -= 9
        }
    }
    sumEl.innerHTML = 'My Sum: ' + player1SumCardsValue
    yourCardEl.innerHTML = `${PLAYER_NAME.toUpperCase()}'s Card(s) <br>` + html;
    Player1._score = player1SumCardsValue //lưu trữ cho hàm checkwin
    console.log(Player1._score);

    // không gộp chung cùng hàm If bên trên vì nếu trong trường hợp có "A" thì hàm sẽ thực hiện sai. tức là tổng điểm có thể cao hơn 21 mà vẫn chưa hết game.
    if (player1SumCardsValue >= MAX_SCORE) {
        processDealerGame()
    }
}

function processDealerGame() { //gọi khi bấm Stay button
    cardDealer = []
    let dealerFirstCard = deck.getRandomCard()
    let dealerSecondCard = deck.getRandomCard()
    cardDealer.push(dealerFirstCard, dealerSecondCard)
    showListCardDealer()
    getCardforDealer()
    setTimeout(checkingWin, 1000)
    // checkingWin()
}

function getCardforDealer() {
    if (dealer._score < MIN_DEALER_SCORE) {
        let currentCardValue = deck.getRandomCard()
        cardDealer.push(currentCardValue)
        showListCardDealer()
        getCardforDealer()
    }
}

function showListCardDealer() {
    let dealerSumCardsValue = 0;
    let html = ''
    for (let j = 0; j < cardDealer.length; j++) {
        dealerSumCardsValue += cardDealer[j].score;
        html += cardDealer[j].getHtml() + " "; // thêm space đê hện thị đẹp hơn.
        if (cardDealer[j].value === "A") {
            cardDealer._flagAce = true
        }
    }
    if (dealerSumCardsValue > MAX_SCORE) {
        if (cardDealer._flagAce === true) {
            dealerSumCardsValue -= 9;
            cardDealer._flagAce = false
        }
    }

    dealerSumEl.innerHTML = "Dealer's sum:" + dealerSumCardsValue;
    dealerCardEl.innerHTML = `Dealer Card(s) <br>` + html
    dealer._score = dealerSumCardsValue; //lữu trữ cho hàm checkWin()
}

function refreshGame() {
    if (confirm("Are you sure to refresh the game?")) {
        messageEl.innerHTML = `${PLAYER_NAME.toUpperCase()}, Let's play one more game ?`;
        cardDealer = [];
        cardPlayer = [];
        deck.cards = [];
        showListCardPlayer();
        showListCardDealer();
        restartMessage()
        enableButton()
        Player1.playerRestart()
        dealer.dealerRestart();

    }
}

function checkingWin() {
    messageEl.style.color = "red"
    if (Player1._score > MAX_SCORE) {
        messageEl.innerHTML = "You are OUT of the game!!!!"
        Player1._coins -= Player1.bettingAmount;
    } else if (checkGameTie()) {
        messageEl.innerHTML = "Game Tie!!"
    } else if (checkingDealerWin()) {
        messageEl.innerHTML = "You LOSE!"
        Player1._coins -= Player1.bettingAmount;
    } else if (checkingPlayerWin()) {
        messageEl.innerHTML = "You WON the game!!!!"
        Player1._coins += Player1.bettingAmount;
    }
    Player1CoinsEl.innerHTML = "Your Coins: " + Player1._coins
    hitBtnEl.disabled = true;
    stayBtnEl.disabled = true;
    startBtnEl.disabled = true;
    if (Player1._coins <= 0) {
        alert("You are out of Coins")
        Player1._aliveStatus = false
    }
    updateData();
}

function updateData() {
    let data = loadData();
    let index = findUserByEmail(currentUser.email);
    data[index].money = Player1._coins;
    saveData(PLAYER_SAVE,data);
    saveData(PLAYER_LOGIN,data[index]);

}

function checkGameTie() {
    return Player1._score === dealer._score;
}

function checkingPlayerWin() {
    return Player1._score > dealer._score || dealer._score > MAX_SCORE;

}

function checkingDealerWin() {
    return Player1._score < dealer._score && dealer._score <= MAX_SCORE;
}

function restartMessage() {
    bettingEl.innerHTML = "";
    sumEl.innerHTML = "";
    yourCardEl.innerHTML = "";
    dealerSumEl.innerHTML = "";
    dealerCardEl.innerHTML = "";
    messageEl.style.color = "lightyellow";
}

function enableButton() {
    hitBtnEl.disabled = false;
    stayBtnEl.disabled = false;
    startBtnEl.disabled = false;
}