console.log("test");

const loginBtn = document.getElementById("LogInBtn");
const userName = document.getElementById("UserName");
const password = document.getElementById("Password");
const SignUpBtn = document.getElementById("SignUpBtn");
const demo = document.getElementById("Demo");
const LogOutBtn=document.getElementById("LogOutBtn");

const users = [ 
    {"userName": "janne", "password": "test"},
 ];
 if (!localStorage.getItem("userName, password")) {
    fetch(".json")
    .then(res => res.json())
    .then(data => {
        // console.log("fetch json", data);

        // let stringData = JSON.stringify(data);
        // console.log("stringified", stringData);

        // let parsedData = JSON.parse(stringData);
        // console.log("parsed data", parsedData);

        localStorage.setItem("persons", JSON.stringify(data))
    })
}
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