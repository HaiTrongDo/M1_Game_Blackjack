import {UserManagement} from "./UserManagement.js";
import {UserClass} from "./UserClass.js";


let userList = new UserManagement()
userList.showDataTable()
updateButtonDelete()
// let index;
loadWeb()





function loadWeb() {
updateSearchButton()
confirmButton()
updateButtonEdit()
updateSort()
}


function updateButtonDelete() {
    let deleteUserButtons = document.getElementsByClassName('delete-user');
    for (let i = 0; i < deleteUserButtons.length; i++) {
        deleteUserButtons[i].addEventListener('click',  () => {
            let index = deleteUserButtons[i].getAttribute('value');
            userList.deleteUser(+index);
            // goi lai ham uplodate de cap nhat deleteUserButtons
            updateButtonDelete();
        })
    }
}

function updateButtonEdit() {
    let editUserButtons = document.getElementsByClassName('edit-user');
    for (let i = 0; i < editUserButtons.length; i++) {
        editUserButtons[i].addEventListener('click',  () => {
            let indexEdit = editUserButtons[i].getAttribute('value');
            userList.editUser(+indexEdit);
            // goi lai ham uplodate de cap nhat deleteUserButtons
            updateButtonEdit();
        })
    }
}
function confirmButton(){
    let confirmUserButtons = document.getElementById('confirm');
    confirmUserButtons.addEventListener('click', ()=>{
        userList.saveEdit();
    })
}


function updateSearchButton() {
    let SearchButton = document.getElementById("searchBarEl")
    SearchButton.addEventListener('keyup',(e)=>{
        let filterCharters = e.target["value"];
        userList.searchItem(filterCharters);
    })
}



function updateSort(){
   let  sortByEl =  document.getElementById("selectorEl")
    sortByEl.addEventListener('change',(value) =>{
        userList.sortByValue(value.target["value"])
    } )
}





