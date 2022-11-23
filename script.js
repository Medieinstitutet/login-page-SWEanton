const loginBtn = document.getElementById('loginBtn');
const signUpBtn = document.getElementById('signUpBtn');
const userName = document.getElementById('userName');
const password = document.getElementById('password');
const demo = document.getElementById('demo');

const users = [ 
    {"userName": "janne", "password": "test"},
    {"userName": "anton", "kuken": "test"},

 ];

log_in = () => { 
    console.log('klick på knapp ');
  
    for (i = 0; i < users.length; i++) {
      if (userName.value == users[i].userName && password.value == users[i].password) {
        demo.innerHTML = "Du är inloggad som: " + userName.value;
        return true;
      }
    }
    demo.innerHTML = "Användaren finns inte";
}