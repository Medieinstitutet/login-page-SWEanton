console.log("test"); 
const demo = document.getElementById("demo");
const usernameInput = document.getElementById("usernameInput");
const userName = document.getElementById("userName");
const passwordInput = document.getElementById("passwordInput");
const password = document.getElementById("password");
const logInBtn = document.getElementById("logInBtn");
const logInPage = document.getElementById("logInPage");
const logOutPage = document.getElementById("logOutPage");

const user = [
    {username:"janne", password:"test"},
    {username:"anton", password:"anton"},
]
logInBtn.addEventListener("click", () => { 
  let personsRegister = JSON.parse(localStorage.getItem("personsRegister"));
  for (i = 0; i < personsRegister.length; i++) {
    if (usernameInput.value == personsRegister[i].username && passwordInput.value == personsRegister[i].password) {
      logInPage.style.display = "none"
      demo.innerHTML = ""
      logOutPage.style.display = "block";
      demo.innerHTML = "Best of luck: " + usernameInput.value;
      demo.style.color = "red"
      return true;
  } else {
    demo.innerHTML = "Wrong credentials, please try again. ";
    demo.style.color = "red";
  }
  }
})

logInBtn.addEventListener("click", () => {

    if (password === passwordConfirm) {
    } 
})

        const logOut = document.getElementById("logOut");
        let logOutBtn = document.createElement("button");
        let textButton = document.createTextNode("Exit");
        logOutBtn.appendChild(textButton);
        logOut.appendChild(logOutBtn);
        logOutBtn.addEventListener("click", () => {
          logOutPage.style.display = "none"
            logInPage.style.display = "block"
            demo.innerHTML = "";
            logInPage.appendChild = "";
        })

function reloadLogInStatus(logInStatus) {
    if (logInStatus === null) {

    }

}

window.onload = reloadLogInStatus(localStorage.getItem("personsRegister"));