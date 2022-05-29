var UserManagement = /** @class */ (function () {
    function UserManagement() {
        this.userList = [];
    }
    UserManagement.prototype.saveData = function (currentData) {
        localStorage.setItem("players", JSON.stringify(currentData));
    };
    UserManagement.prototype.getData = function () {
        this.userList = [];
        if (localStorage.hasOwnProperty('players')) {
            this.userList = JSON.parse(localStorage.getItem('players'));
        }
        return this.userList;
    };
    UserManagement.prototype.showDataTable = function () {
        var systemData = this.getData();
        this.drawTable(systemData);
    };
    UserManagement.prototype.drawTable = function (systemData) {
        var table = '';
        if (!systemData.length)
            return document.getElementById("userTable").innerHTML = "<tr>No data</tr>";
        table += "    <tr>\n                        <th>No.</th>\n                        <th>First Name</th>\n                        <th>Last Name </th>\n                        <th>Email</th>\n                        <th>Password</th>\n                        <th>Coin</th>\n                        <th>ID</th>\n                        <th>Delete</th>\n                        <th>Edit</th>\n                        </tr>";
        for (var i = 0; i < systemData.length; i++) {
            table += "<tr>\n                            <th>No.".concat(i + 1, "</th>\n                            <td>").concat(systemData[i].name, "</td>\n                            <td>").concat(systemData[i].lastName, "</td>\n                            <td>").concat(systemData[i].email, "</td>\n                            <td>").concat(systemData[i].pass, "</td>\n                            <td>").concat(systemData[i].money, "</td>\n                            <td>").concat(systemData[i].playerId, "</td>\n                            <td><button class=\"btn btn-danger delete-user\" value=\"").concat(i, "\">Delete</button></td>\n                            <td><button class=\"btn btn-primary edit-user\" value=\"").concat(i, "\" data-bs-target=\"#exampleModal\" data-bs-toggle=\"modal\"\n                    data-bs-whatever=\"@fat\"\n                    type=\"button\">Edit\n            </button></td>\n                            </tr>");
        }
        document.getElementById("userTable").innerHTML = table;
    };
    UserManagement.prototype.editUser = function (index) {
        var players = this.getData();
        document.getElementById("recipient-firstName")["value"] = players[index].name;
        document.getElementById("recipient-lastName")["value"] = players[index].lastName;
        document.getElementById("recipient-email")["value"] = players[index].email;
        document.getElementById("recipient-Coin")["value"] = players[index].money;
        localStorage.setItem("currentEditing", JSON.stringify(players[index]));
    };
    UserManagement.prototype.saveEdit = function () {
        var index = this.findUserByID();
        var players = this.getData();
        players[index].name = document.getElementById("recipient-firstName")["value"];
        players[index].lastName = document.getElementById("recipient-lastName")["value"];
        players[index].email = document.getElementById("recipient-email")["value"];
        players[index].money = document.getElementById("recipient-Coin")["value"];
        this.saveData(players);
        // this.showDataTable();
        localStorage.removeItem("currentEditing");
        document.location.reload();
    };
    UserManagement.prototype.findUserByID = function () {
        var data = this.getData();
        var currentEditingPlayer = JSON.parse(localStorage.getItem('currentEditing'));
        for (var index in data) {
            if (data[index].playerId === currentEditingPlayer.playerId) {
                return index;
            }
        }
    };
    UserManagement.prototype.deleteUser = function (index) {
        var players = this.getData();
        players.splice(index, 1);
        this.saveData(players);
        // document.location.reload()
        this.showDataTable();
    };
    UserManagement.prototype.searchItem = function (filterCharters) {
        var data = this.getData();
        var newData = data.filter(function (obj) {
            return (obj.name.toUpperCase().includes(filterCharters.toUpperCase()) ||
                obj.lastName.toUpperCase().includes(filterCharters.toUpperCase()) ||
                obj.playerId.toString().includes(filterCharters) ||
                obj.email.toUpperCase().includes(filterCharters.toUpperCase()));
        });
        this.drawTable(newData);
    };
    UserManagement.prototype.sortByValue = function (value) {
        switch (value) {
            case "1":
                this.sortByName();
                break;
            case "2":
                this.sortByCoin();
                break;
            case "3":
                this.sortByFirstName();
                break;
            case "4":
                this.sortByLastName();
                break;
            case "5":
                this.sortByEmail();
                break;
        }
    };
    UserManagement.prototype.sortByName = function () {
        var data = this.getData();
        data.sort(function (a, b) {
            if (a.playerId < b.playerId) {
                return -1;
            }
            if (a.playerId > b.playerId) {
                return 1;
            }
            return 0;
        });
        this.saveData(data);
        document.location.reload();
    };
    UserManagement.prototype.sortByCoin = function () {
        var data = this.getData();
        data.sort(function (a, b) {
            if (a.money < b.money) {
                return -1;
            }
            if (a.money > b.money) {
                return 1;
            }
            return 0;
        });
        this.saveData(data);
        document.location.reload();
    };
    UserManagement.prototype.sortByFirstName = function () {
        var data = this.getData();
        data.sort(function (a, b) {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
        this.saveData(data);
        document.location.reload();
    };
    UserManagement.prototype.sortByLastName = function () {
        var data = this.getData();
        data.sort(function (a, b) {
            if (a.lastName < b.lastName) {
                return -1;
            }
            if (a.lastName > b.lastName) {
                return 1;
            }
            return 0;
        });
        this.saveData(data);
        document.location.reload();
    };
    UserManagement.prototype.sortByEmail = function () {
        var data = this.getData();
        data.sort(function (a, b) {
            if (a.email < b.email) {
                return -1;
            }
            if (a.email > b.email) {
                return 1;
            }
            return 0;
        });
        this.saveData(data);
        document.location.reload();
    };
    return UserManagement;
}());
export { UserManagement };
//# sourceMappingURL=UserManagement.js.map