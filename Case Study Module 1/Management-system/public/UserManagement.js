// import {UserClass} from "./Classes/UserClass.js";
var UserManagement = /** @class */ (function () {
    function UserManagement() {
        this.userList = [];
    }
    UserManagement.prototype.deleteUserOnTable = function (removeIndex) {
        var systemData = this.getData();
        systemData.splice(removeIndex, 1);
        localStorage.setItem("players", JSON.stringify(systemData));
        this.showDataTable();
    };
    UserManagement.prototype.getData = function () {
        this.userList = [];
        if (localStorage.hasOwnProperty('players')) {
            this.userList = JSON.parse(localStorage.getItem('players'));
        }
        return this.userList;
    };
    UserManagement.prototype.showDataTable = function () {
        var table = '';
        var systemData = this.getData();
        if (!systemData)
            return table += "<tr>No data</tr>";
        for (var i = 0; i < systemData.length; i++) {
            table += "<tr>\n                            <th>No.".concat(i + 1, "</th>\n                            <td>").concat(systemData[i].name, "</td>\n                            <td>").concat(systemData[i].lastName, "</td>\n                            <td>").concat(systemData[i].email, "</td>\n                            <td>").concat(systemData[i].pass, "</td>\n                            <td>").concat(systemData[i].money, "</td>\n                            <td><button class=\"btn btn-danger\" onclick=\"deleteUserOnTable(").concat(i, ")\">Delete</button></td>\n                            <td><button class=\"btn btn-info\" onclick=\"editUser(").concat(i, ")\">Edit</button></td>\n                            </tr>");
        }
        document.getElementById("userTable").innerHTML += table;
    };
    UserManagement.prototype.editUser = function (index) {
    };
    return UserManagement;
}());
var userList = new UserManagement();
userList.showDataTable();
//# sourceMappingURL=UserManagement.js.map