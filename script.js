console.log("test");

const loginBtn = document.getElementById("logInBtn");
const userName = document.getElementById("userName");
const password = document.getElementById("password");
const SignUpBtn = document.getElementById("SignUpBtn");
const demo = document.getElementById("demo");
const LogOutBtn=document.getElementById("LogOutBtn");

const users = [ 
    {"userName": "janne", "password": "test"},
 ];

 loginBtn.addEventListener("click",() => {    
    console.log("klick på knapp");
  
 for (i = 0; i < users.length; i++) {
   if (userName.value == users[i].userName && password.value == users[i].password) {
     demo.innerHTML = "Du är inloggad som: " + userName.value;
     return true;
   }
 }
 demo.innerHTML = "Användaren finns inte";

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

        let 
}