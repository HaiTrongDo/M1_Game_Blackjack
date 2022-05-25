import {UserClass} from "./UserClass.js";
 export class UserManagement {
     userList

     constructor() {
         this.userList = []
     }

     saveData(currentData){
         localStorage.setItem("players", JSON.stringify(currentData))
     }

     getData() {
         this.userList = []
         if (localStorage.hasOwnProperty('players')) {
             this.userList = JSON.parse(localStorage.getItem('players'));
         }
         return this.userList;
     }

     showDataTable() {
         let table = ''
         let systemData = this.getData()
         if (!systemData) return table += `<tr>No data</tr>`;
            table +=`    <tr>
                        <th>No.</th>
                        <th>First Name</th>
                        <th>Last Name </th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Coin</th>
                        <th>Delete</th>
                        <th>Edit</th>
                        </tr>`
         for (let i = 0; i < systemData.length; i++) {
             table += `<tr>
                            <th>No.${i + 1}</th>
                            <td>${systemData[i].name}</td>
                            <td>${systemData[i].lastName}</td>
                            <td>${systemData[i].email}</td>
                            <td>${systemData[i].pass}</td>
                            <td>${systemData[i].money}</td>
                            <td><button class="btn btn-danger delete-user" value="${i}">Delete</button></td>
                            <td><button class="btn btn-primary edit-user" value="${i}" data-bs-target="#exampleModal" data-bs-toggle="modal"
                    data-bs-whatever="@fat"
                    type="button">Edit
            </button></td>
                            </tr>`
         }
         document.getElementById("userTable").innerHTML = table
     }


     editUser(index){
         let players = this.getData()
         document.getElementById("recipient-firstName").value = players[index].name
         document.getElementById("recipient-lastName").value = players[index].lastName
         document.getElementById("recipient-email").value = players[index].email
         document.getElementById("recipient-Coin").value = players[index].money
     }

     saveEdit(index){
         let players = this.getData()
         players[index].name = document.getElementById("recipient-firstName").value;
         players[index].lastName = document.getElementById("recipient-lastName").value;
         players[index].email = document.getElementById("recipient-email").value
         players[index].money = document.getElementById("recipient-Coin").value

         this.saveData(players)
         this.showDataTable();
     }

     deleteUser(index: number): void {
         let players = this.getData()
         players.splice(index, 1);
         this.saveData(players)
         this.showDataTable();
     }
 }



