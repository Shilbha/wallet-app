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
    var password = getval("ip2");
    if(Email=="" || password==""){
        alert("Enter valid Email");
    }
    else{
        FetchAllData(Email,password);
    }
    


}

const getval = (id) => {
    return document.getElementById(id).value;


}
var count =0;
function FetchAllData(Email,password) {
    firebase.database().ref('form').once('value', function (snapshot) {
        snapshot.forEach(
            function (ChildSnapshot) {
                let a = ChildSnapshot.val().Email;
                let b = ChildSnapshot.val().setPassword;
                if(a==Email && b==password){
                    count=1;
                }
                console.log(a);
            }
        );
        Valid(count);
    })
}
function Valid(count) {
    if (count == 1) {
        // console.log(Email);
        // sessionStorage.setItem('name', JSON.stringify(name));
        window.location = 'ho.html';


    }
    else {
        alert("Enter the valid mail")
    }
}