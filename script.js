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
    {username:"anton", password:"kuken"},
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
    demo.innerHTML = "You have been carefully selected for this and we've already given you the right log in credentials. Please use them, this is NOT a joke. ";
    demo.style.color = "red";
  }
  }
})

newFunction();

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

function newFunction() {
  logInBtn.addEventListener("click", () => {

    if (password === passwordConfirm) {
    }
  });
}



var personsRegister = localStorage.getItem('userName', 'password');
console.log(personsRegister); //  To print the value of localStorage variable name
1
2
var name = localStorage.getItem('name');
// Set localStorage item
localStorage.setItem('dataObject', JSON.stringify(userName));
var retrievedObject = localStorage.getItem('userName');

// console.log retrieved item
console.log('userName: ', JSON.parse(userName));

// Set localStorage item
localStorage.setItem('dataObject', JSON.stringify(password));
var retrievedObject = localStorage.getItem('password');

// console.log retrieved item
console.log('password: ', JSON.parse(password));



localStorage.setItem('dataObject', JSON.stringify(userName));
var retrievedObject = localStorage.getItem('userName');

// console.log retrieved item
console.log('userName: ', JSON.parse(userName));

// Set localStorage item
localStorage.setItem('dataObject', JSON.stringify(usernameInput));
var retrievedObject = localStorage.getItem('password');

// console.log retrieved item
console.log('userName: ', JSON.parse(userName));


alert( localStorage.usernameInput );

alert( localStorage.passwordInput );