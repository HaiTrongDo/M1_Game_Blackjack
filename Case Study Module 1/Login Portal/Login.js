class Player {
    constructor(name, email, pass) {
        this.name = name;
        this.email = email;
        this.pass = pass;
        this.money = 1000;
    }
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
            window.location.href = "../GamePLay/GamePlay.html";
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

function clearInput() {
    document.getElementById('username').innerHTML = ""
    document.getElementById('password').innerHTML = ""
    document.getElementById('playerName').innerHTML = ""
}

function moveToRegister(){
    window.location.href = "./register/register.html";
}