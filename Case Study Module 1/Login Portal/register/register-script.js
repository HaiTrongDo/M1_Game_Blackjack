let myApp = angular.module("myApp", []);
myApp.controller("RegisterCtrl", function ($scope) {
});

class Player {
    static id = 100
    constructor(firstName,lastName, email, password) {
        this.name = firstName;
        this.lastName = lastName
        this.email = email;
        this.pass = password;
        this.money = 1000;
        this.playerId = Player.id++
    }
}



function newRegister() {
    let userEmail = document.getElementById('email-register-el').value;
    let password = document.getElementById('password-register-el').value;
    let firstName = document.getElementById('first-name-register').value;
    let lastName = document.getElementById('last-name-register').value;
    let player = new Player(firstName, lastName, userEmail, password)
    LoadingUser(player)
    alert('register is succeed')
    clearInputInRegister()
    // window.location.href = "../login.html";
}

function LoadingUser(player) {
    let data = loadData();
    data.push(player);
    localStorage.setItem("players", JSON.stringify(data));
}


function clearInputInRegister() {
    document.getElementById('email-register-el').value = ""
    document.getElementById('password-register-el').value = ""
    document.getElementById('first-name-register').value = ""
    document.getElementById('last-name-register').value = ""

}

function loadData() {
    let data = [];
    if(localStorage.hasOwnProperty('players')){
        data = JSON.parse(localStorage.getItem('players'));
    }
    return data;
}