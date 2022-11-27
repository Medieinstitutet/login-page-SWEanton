console.log("test");
const header = document.getElementById("header");
const footer = document.getElementById("footer");
const mainBox = document.getElementById("mainBox");

const userID = document.getElementById("usernameBox");
const userPassword = document.getElementById("passwordBox");
const placeholderBtn = document.getElementById("placeholderBtn");

let credentials = [
    {userName: "janne",
     password: "test",
    }
    ];


function checkPassword() {  
    let person = credentials.find(person => person.userName === userID.value);
    if (person && person.password === userPassword.value) {
        let loginUser = userID.value
        localStorage.setItem("userName", JSON.stringify(loginUser));
        toggleBtn();
        loggedIn();

    } else {
        demo.innerHTML = "Wrong credentials, please try again.  ";
        demo.style.color = "red";

    }
    userID.value="";
    userPassword.value="";
}

if (localStorage.getItem("userName")) { 
    alreadyLogIn();
    toggleBtn();
} else {    
    createLoginBtn();
    loggedout();
} 


function toggleBtn () {
    placeholderBtn.innerHTML = "";      

    let logoutBtn = document.createElement("button");
    placeholderBtn.appendChild(logoutBtn);
    logoutBtn.innerText = "logout";
    userID.style.display = "none";
    userPassword.style.display ="none";

    logoutBtn.addEventListener("click", () => { 
        mainBox.innerHTML= "";
        localStorage.removeItem("userName");
        createLoginBtn();        
    })         
}

function createLoginBtn () {    
    placeholderBtn.innerHTML ="";
    userID.style.display = "";
    userPassword.style.display = "";

    let loginBtn = document.createElement("button");
    placeholderBtn.appendChild(loginBtn);
    loginBtn.innerText = "Login";

    loginBtn.addEventListener("click", () => {
        checkPassword();        
    })
}

function loggedIn() {    
    let welcomeBox = document.createElement("span");
    mainBox.append(welcomeBox);
    welcomeBox.className = "box";
    welcomeBox.insertAdjacentHTML("afterbegin", "You're now accepted to the 2024 Squid Game. User:  " +userID.value);
}

function loggedout() {
    mainBox.innerHTML= "";
}

function alreadyLogIn() {
    let loggedInUser = JSON.parse(localStorage.getItem("userName"));
    let welcomeBox = document.createElement("span");
    mainBox.append(welcomeBox);
    welcomeBox.className = "box";
    welcomeBox.insertAdjacentHTML("afterbegin", "Hello again, did you change your mind? If so, please send 0.5 $BTC to #34xp4vRoCGJym3xR7yCVPFHoCNxv4Twseo. User: " +loggedInUser);
}