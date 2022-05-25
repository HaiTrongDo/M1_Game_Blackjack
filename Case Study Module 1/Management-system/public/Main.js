import { UserManagement } from "./UserManagement.js";
var userList = new UserManagement();
userList.showDataTable();
updateButtonDelete();
var index;
function updateButtonDelete() {
    var deleteUserButtons = document.getElementsByClassName('delete-user');
    var _loop_1 = function (i) {
        deleteUserButtons[i].addEventListener('click', function () {
            index = deleteUserButtons[i].getAttribute('value');
            userList.deleteUser(+index);
            // goi lai ham uplodate de cap nhat deleteUserButtons
            updateButtonDelete();
        });
    };
    for (var i = 0; i < deleteUserButtons.length; i++) {
        _loop_1(i);
    }
}
function updateButtonEdit() {
    var editUserButtons = document.getElementsByClassName('edit-user');
    var _loop_2 = function (i) {
        editUserButtons[i].addEventListener('click', function () {
            index = editUserButtons[i].getAttribute('value');
            userList.editUser(+index);
            // goi lai ham uplodate de cap nhat deleteUserButtons
            updateButtonEdit();
        });
    };
    for (var i = 0; i < editUserButtons.length; i++) {
        _loop_2(i);
    }
}
function confirmButton() {
    var confirmUserButtons = document.getElementById('confirm');
    confirmUserButtons.addEventListener('click', function () {
        userList.saveEdit();
    });
}
confirmButton();
updateButtonEdit();
function updateSearchButton() {
    var SearchButton = document.getElementById("searchBarEl");
    // let SearchButton = document.getElementById("searchButton");
    SearchButton.addEventListener('keyup', function (e) {
        var filterCharters = e.target["value"];
        userList.searchItem(filterCharters);
    });
}
updateSearchButton();
//# sourceMappingURL=Main.js.map