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
         let newData = data.filter((obj) =>{
             return (
                    obj.name.toUpperCase().includes(filterCharters.toUpperCase()) ||
                    obj.lastName.toUpperCase().includes(filterCharters.toUpperCase())||
                    obj.email.toUpperCase().includes(filterCharters.toUpperCase())
             )
         })
         this.drawTable(newData)
     }

     sortByValue(value){
         switch (value){
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
     }

     sortByName(){
         let data = this.getData()
         data.sort(function(a, b){
             if(a.id < b.id) { return -1; }
             if(a.id > b.id) { return 1; }
             return 0;
         })

         this.drawTable(data)
         this.saveData(data)
     }
     sortByCoin(){
         let data = this.getData()
         data.sort(function(a, b){
             if(a.money < b.money) { return -1; }
             if(a.money > b.money) { return 1; }
             return 0;
         })
         this.drawTable(data)
         this.saveData(data)
     }

     sortByFirstName(){
         let data = this.getData()
         data.sort(function(a, b){
             if(a.name < b.name) { return -1; }
             if(a.name > b.name) { return 1; }
             return 0;
         })
         this.drawTable(data)
         this.saveData(data)
     }

     sortByLastName(){
         let data = this.getData()
         data.sort(function(a, b){
             if(a.lastName < b.lastName) { return -1; }
             if(a.lastName > b.lastName) { return 1; }
             return 0;
         })
         this.drawTable(data)
         this.saveData(data)
     }

     sortByEmail(){
         let data = this.getData()
         data.sort(function(a, b){
             if(a.email < b.email) { return -1; }
             if(a.email > b.email) { return 1; }
             return 0;
         })
         this.drawTable(data)
         this.saveData(data)
     }

 }



