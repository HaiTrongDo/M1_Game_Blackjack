const PLAYER_SAVE = 'players';
const PLAYER_LOGIN = 'currentUser';
function loadData() {
    let data = [];
    if(localStorage.hasOwnProperty('players')){
        data = JSON.parse(localStorage.getItem('players'));
    }
    return data;
}

function saveData(key,data) {
    localStorage.setItem(key,JSON.stringify(data))
}

function findUserByEmail(email) {
    let data = loadData();
    for (const index in data) {
        if(data[index].email === email){
            return index;
        }
    }
}