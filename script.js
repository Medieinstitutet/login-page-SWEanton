console.log("test"); 

const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");
const logInBtn = document.getElementById("logInBtn");
const userName = document.getElementById("userName");
const password = document.getElementById("password");
const logInPage = document.getElementById("logInPage");
const message = document.getElementById("message");
const logOutPage = document.getElementById("logOutPage");

const user = [
    {username:"janne", password:"test"},
]
 

createAccBtn.addEventListener("click", () => {

    if (password === passwordConfirm) {
        
        let personsRegister = JSON.parse(localStorage.getItem("personsRegister"));

        let newRegister = {
            username: userName.value,
            password: password.value,
        };


        
    } 
})

logInBtn.addEventListener("click", () => { 
    let personsRegister = JSON.parse(localStorage.getItem("personsRegister"));
    for (i = 0; i < personsRegister.length; i++) {
      if (usernameInput.value == personsRegister[i].username && passwordInput.value == personsRegister[i].password) {
        logInPage.style.display = "none"
        message.innerHTML = ""
        logOutBtn.style.padding = "10px"; 
        logOutBtn.style.margin = "2px"; 
        logOutBtn.style.cursor = "pointer";
        logOutPage.style.display = "block";
        message.innerHTML = "Welcome: " + usernameInput.value;
        return true;
    } else {
        message.innerHTML = "Wrong credentials";
    }
    }
})

        const logOut = document.getElementById("logOut");
        let logOutBtn = document.createElement("button");
        let textButton = document.createTextNode("Log Out");
        logOutBtn.appendChild(textButton);
        logOut.appendChild(logOutBtn);
        logOutBtn.addEventListener("click", () => {
          logOutPage.style.display = "none"
            logInPage.style.display = "block"
            message.innerHTML = "";
            logInPage.appendChild
        })

function reloadLogInStatus(logInStatus) {
    if (logInStatus === null) {

    } else if (logInStatus === personsRegister) {
        
    }

}

window.onload = reloadLogInStatus(localStorage.getItem("personsRegister"));