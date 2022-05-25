import {UserManagement} from "./UserManagement.js";
import {UserClass} from "./UserClass.js";


let userList = new UserManagement()
userList.showDataTable()
updateButtonDelete()
let index;



function updateButtonDelete() {
    let deleteUserButtons = document.getElementsByClassName('delete-user');
    for (let i = 0; i < deleteUserButtons.length; i++) {
        deleteUserButtons[i].addEventListener('click',  () => {
             index = deleteUserButtons[i].getAttribute('value');
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
             index = editUserButtons[i].getAttribute('value');
            console.log(index)
            userList.editUser(+index);


            // goi lai ham uplodate de cap nhat deleteUserButtons
            updateButtonEdit();
        })
    }
}
function confirmButton(){
    let confirmUserButtons = document.getElementById('confirm');
    confirmUserButtons.addEventListener('click', ()=>{
        userList.saveEdit(index);
    })
}
confirmButton()
updateButtonEdit()








