class Player {
    constructor(name, email, pass) {
        this.name = name;
        this.email = email;
        this.pass = pass;
        this.money = 1000;
    }
}

function LoadingUser(player) {
    let data = loadData();

    data.push(player);
    localStorage.setItem("players", JSON.stringify(data));
}

function login() {
    let username = document.getElementById('username').value;
    let pass = document.getElementById('password').value;
    let players = loadData();
    let loginStatus = false;
    for (const player of players) {
        if (player.email === username && player.pass === pass) {
            alert("Login successful!")
            localStorage.setItem('currentUser', JSON.stringify(player));
            window.location.href = "../index.html";
            loginStatus = true
            clearInput()
            break;
        } else {
            loginStatus = false;
        }
    }
    if (!loginStatus) {
        alert("Wrong Email or Password")
    }
    clearInput()
}


function newRegister() {
    let userEmail = document.getElementById('username').value;
    let pass = document.getElementById('password').value;
    let name = document.getElementById('playerName').value;
    let player = new Player(name, userEmail, pass)
    LoadingUser(player)
    clearInput()
}

function clearInput() {
    document.getElementById('username').innerHTML = ""
    document.getElementById('password').innerHTML = ""
    document.getElementById('playerName').innerHTML = ""
}