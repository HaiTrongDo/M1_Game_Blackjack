function loadData() {
    let data = [];
    if(localStorage.hasOwnProperty('players')){
        data = JSON.parse(localStorage.getItem('players'));
    }
    return data;
}