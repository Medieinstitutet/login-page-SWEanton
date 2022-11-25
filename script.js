console.log("test"); 

//Deklarerar alla element//
const LoginBtn = document.getElementById("LogInBtn");
const UserName = document.getElementById("UserName");
const Password = document.getElementById("Password");
const SignUpBtn = document.getElementById("SignUpBtn");
const LogOutBtn = document.getElementById("LogOutBtn");
const Demo = document.getElementById("Demo");

const users = [ 
    {"UserName": "janne", "Password": "test"}
    {"UserName": "anton", "Password": "kuken"}
 ];

 function loginStay(){
    if (localStorage.getItem("UserName", "Password")){
            Demo.innerHTML =  ""
    }


    function (){
        if (localStorage.getItem("UserName"))
    
    loginStatus()}
    
 if (!localStorage.getItem("UserName", "Password")) {
    fetch("UserName.json", "Password.json")
    .then(res => res.json())
    .then(data => 
        console.log("fetch json", data);

        let stringData = JSON.stringify(data);
        console.log("stringified", stringData);

        let parsedData = JSON.parse(stringData);
        // console.log("parsed data", parsedData);

        localStorage.setItem("UserName", "Password", JSON.stringify())
    })
}
 loginBtn.addEventListener("click",() => {    
    console.log("klick på knapp");
  
 for (i = 0; i < users.length; i++) {
   if (UserName.value == users[i].UserName && Password.value == users[i].Password) {
     Demo.innerHTML = "auf wiedersehen: " + UserName.value;
     return true;
   }
 }
 Demo.innerHTML = "Error. 3... 2.. 1. Engage self destruct mechanism. Take cover";

 }  );
// //!*
// log_in = () => { 
//     console.log("klick på knapp");
  
//     for (i = 0; i < users.length; i++) {
//       if (userName.value == users[i].userName && password.value == users[i].password) {
//         demo.innerHTML = "Du är inloggad som: " + userName.value;
//         return true;
//       }
//     }
//     demo.innerHTML = "Användaren finns inte";
// }//!

SignUpBtn.addEventListener("click"), () => {
    console.log("Klick på knapp")

        let NewAccount = {
            "UserName": SaveUserName.value,
            "Password": SavePassword.value,
        }

      }