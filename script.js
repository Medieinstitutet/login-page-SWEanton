console.log("test"); 

const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");
const logInBtn = document.getElementById("logInBtn");
const createAccBtn = document.getElementById("createAccBtn");
const closeBtn = document.getElementById("closeBtn");
const userName = document.getElementById("userName");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("passwordConfirm");
const loggedOutView = document.getElementById("loggedOutView");
const message = document.getElementById("message");
const loggedInView = document.getElementById("loggedInView");

const user = [
    {username:"janne", password:"test"},
]
 
if (localStorage.getItem("personsRegister")) {
    console.log("Det finns sparat i LS");
} else {
    console.log("Finns inget sparat i LS");
 
    localStorage.setItem('personsRegister', JSON.stringify(personsRegister));
}
 
createAccBtn.addEventListener("click", () => {

    if (password === passwordConfirm) {
        
        let personsRegister = JSON.parse(localStorage.getItem("personsRegister"));

        let newRegister = {
            username: userName.value,
            password: password.value,
        };

        newRegister.push(personsRegister)
    
        localStorage.setItem('personsRegister', JSON.stringify(personsRegister));

        message.insertAdjacentText = "You have successfully created an account!";
        
    } else {
        function createAccError() {
            message.insertAdjacentText = "Passwords not matching";
        }
        createAccError();
    }
})

logInBtn.addEventListener("click", () => { 
    let personsRegister = JSON.parse(localStorage.getItem("personsRegister"));
    for (i = 0; i < personsRegister.length; i++) {
      if (usernameInput.value == personsRegister[i].username && passwordInput.value == personsRegister[i].password) {
        loggedOutView.style.display = "none"
        message.innerHTML = ""
        logOutBtn.style.padding = "10px"; 
        logOutBtn.style.margin = "2px"; 
        logOutBtn.style.cursor = "pointer";
        loggedInView.style.display = "block";
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
            loggedInView.style.display = "none"
            loggedOutView.style.display = "block"
            message.innerHTML = "";
            loggedOutView.appendChild
        })

function reloadLogInStatus(logInStatus) {
    if (logInStatus === null) {

    } else if (logInStatus === personsRegister) {
        
    }

}

window.onload = reloadLogInStatus(localStorage.getItem("personsRegister"));