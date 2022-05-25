// function searchItem() {
//     let SearchBar = document.getElementById("searchBarEl").value
//     console.log(typeof SearchBar);
//     let data = loadData()
//     // console.log(data);
//     let findStatus = false
//     let newData =[]
//
//     for (let i = 0; i < data.length; i++) {
//         if (data[i].name.toUpperCase() === SearchBar.toUpperCase() ||
//             data[i].lastName.toUpperCase() === SearchBar.toUpperCase()||
//             data[i].email.toUpperCase() === SearchBar.toUpperCase())
//             newData.push(data[i])
//         findStatus = true
//         }
//     if (!findStatus) {
//         alert("not found")
//         return
//     }
//
// }
//
// function loadData() {
//     let data = []
//     if (localStorage.hasOwnProperty('players')) {
//         data = JSON.parse(localStorage.getItem('players'));
//     }
//     return data
// }