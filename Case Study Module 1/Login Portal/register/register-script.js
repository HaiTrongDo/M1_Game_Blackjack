let myApp = angular.module("myApp", []);
myApp.controller("RegisterCtrl", function ($scope) {
});

class Player {
    constructor(name, email, pass) {
        this.name = name;
        this.email = email;
        this.pass = pass;
        this.money = 1000;
    }
}



function newRegister() {
    let userEmail = document.getElementById('email-register-el').value;
    let password = document.getElementById('password-register-el').value;
    let firstName = document.getElementById('first-name-register').value;
    let lastName = document.getElementById('last-name-register').value;
    let player = new Player(firstName, userEmail, password)
    console.log(player)
    LoadingUser(player)
    clearInputInRegister()
    alert('register is succeed')
    window.location.href = "../login.html";
}

function LoadingUser(player) {
    let data = loadData();
    data.push(player);
    localStorage.setItem("players", JSON.stringify(data));
}


function clearInputInRegister() {
    document.getElementById('email-register-el').innerHTML = ""
    document.getElementById('password-register-el').innerHTML = ""
    document.getElementById('first-name-register').innerHTML = ""
    document.getElementById('last-name-register').innerHTML = ""

}

function loadData() {
    let data = [];
    if(localStorage.hasOwnProperty('players')){
        data = JSON.parse(localStorage.getItem('players'));
    }
    return data;
}