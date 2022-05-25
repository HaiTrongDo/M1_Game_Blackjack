
function login() {
    let username = document.getElementById('username').value;
    let pass = document.getElementById('password').value;
    let players = loadData();
    let loginStatus = false;
    if(username === "haido@master.com" && pass === "admin"){
        window.location.href = "../Management-system/adminPage.html";
        clearInput()
        return;
    }
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
        document.getElementById("email-Alert").innerHTML = "Wrong Email or Password"
        // alert("Wrong Email or Password")
        clearInput()
    }
    clearInput()
}

function clearInput() {
    document.getElementById('username').innerHTML = ""
    document.getElementById('password').innerHTML = ""
}

function moveToRegister(){
    window.location.href = "./register/register.html";
}