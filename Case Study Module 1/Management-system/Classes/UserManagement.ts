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
         let systemData = this.getData()
         this.drawTable(systemData)
     }


     drawTable(systemData){
         let table = ''
         if (!systemData.length) return document.getElementById("userTable").innerHTML = `<tr>No data</tr>`;
         table +=`    <tr>
                        <th>No.</th>
                        <th>First Name</th>
                        <th>Last Name </th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Coin</th>
                        <th>ID</th>
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
                            <td>${systemData[i].playerId}</td>
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
         let players:any = this.getData()
         document.getElementById("recipient-firstName")["value"] = players[index].name
         document.getElementById("recipient-lastName")["value"] = players[index].lastName
         document.getElementById("recipient-email")["value"] = players[index].email
         document.getElementById("recipient-Coin")["value"] = players[index].money
         localStorage.setItem("currentEditing", JSON.stringify(players[index]))
     }

     saveEdit(){
         let index = this.findUserByID()
         let players = this.getData()
         players[index].name = document.getElementById("recipient-firstName")["value"];
         players[index].lastName = document.getElementById("recipient-lastName")["value"];
         players[index].email = document.getElementById("recipient-email")["value"]
         players[index].money = document.getElementById("recipient-Coin")["value"]
         this.saveData(players)
         // this.showDataTable();
         localStorage.removeItem("currentEditing")
         document.location.reload()
     }

     findUserByID(){
         let data = this.getData()
         let currentEditingPlayer = JSON.parse(localStorage.getItem('currentEditing'))
         for (const index in data) {
             if(data[index].playerId === currentEditingPlayer.playerId){
                 return index;
             }
         }
     }


     deleteUser(index: number): void {
         let players = this.getData()
         players.splice(index, 1);
         this.saveData(players)
         this.showDataTable();
     }

     searchItem(filterCharters) {
         let data = this.getData()
         let findStatus = false
         let newData = data.filter((obj) =>{
             return (
                    obj.name.toUpperCase().includes(filterCharters.toUpperCase()) ||
                     obj.lastName.toUpperCase().includes(filterCharters.toUpperCase())||
                     obj.email.toUpperCase().includes(filterCharters.toUpperCase())
             )
         })
         console.log(newData);
         this.drawTable(newData)
     }

 }



