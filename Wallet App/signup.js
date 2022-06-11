const firebaseConfig = {
    apiKey: "AIzaSyAtevgunLGNZcVgGEwOKRuJbHslfM8RB4A",
    authDomain: "wallet-app-2b79d.firebaseapp.com",
    databaseURL: "https://wallet-app-2b79d-default-rtdb.firebaseio.com",
    projectId: "wallet-app-2b79d",
    storageBucket: "wallet-app-2b79d.appspot.com",
    messagingSenderId: "3205674653",
    appId: "1:3205674653:web:4d52b01f16d91e0b290674"
  };

  firebase.initializeApp(firebaseConfig);
var contactdb = firebase.database().ref("form");

document.getElementById("form").addEventListener("submit", submitform);

function submitform(e) {
    e.preventDefault();
    var Email = getval("ip1");
    var bank = getval("ip2");
    var accountNumber = getval("ip3");
    var setPassword = getval("ip4");
    var confirmPassword = getval("ip5");

    savemessage(Email,bank,accountNumber,setPassword,confirmPassword);


}
const savemessage = (Email,bank,accountNumber,setPassword,confirmPassword) => {
    var newcontactdb = contactdb.push();
    newcontactdb.set({
        Email: Email,
        bank:bank,
        accountNumber:accountNumber,
        setPassword:setPassword,
        confirmPassword:confirmPassword,
        Amount:0,
    });
}

const getval = (id) => {
    return document.getElementById(id).value;


}
// FetchAllData();
// function FetchAllData() {
//     firebase.database().ref('form').once('value', function (snapshot) {
//         snapshot.forEach(
//             function (ChildSnapshot) {
//                 let a = ChildSnapshot.val().name;
//                 console.log(a);
//             }
//         );
//     })
// }