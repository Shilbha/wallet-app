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
    var acct = getval("acct");
    var pin= getval("pin");
    var amt = getval("amt");
    
        FetchAllData(acct,pin,amt);
    
    


}

const getval = (id) => {
    return document.getElementById(id).value;


}
var count =0;
function FetchAllData(acct,pin,amt) {
    firebase.database().ref('form').once('value', function (snapshot) {
        snapshot.forEach(
            function (ChildSnapshot) {
                let a = ChildSnapshot.val().accountNumber;
                let b = ChildSnapshot.val().setPassword;
                if(a==acct && b==pin){
                    let c = ChildSnapshot.val().Email;
                    let d = ChildSnapshot.val().bank;
                    let e= ChildSnapshot.val().Amount;
                    let tot = Number(amt)+Number(e);
                    savemessage(a,b,c,d,tot);
                }
                console.log(a);
            }
        );
        
    })
}
const savemessage = (a,b,c,d,tot) => {
    var newcontactdb = contactdb.push();
    newcontactdb.set({
        Email: c,
        bank:d,
        accountNumber:a,
        setPassword:b,
        confirmPassword:b,
        Amount:tot,
    });
}