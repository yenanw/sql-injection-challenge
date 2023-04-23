import { SHA256 } from "crypto-js";

import getDb from "../../util/db.js";

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginMsg = document.getElementById("login-msg");

let db = undefined;

loginButton.addEventListener("click", async (e) => {
  e.preventDefault();

  const username = loginForm.username.value;
  const password = loginForm.password.value;

  // because we respect security, of course
  console.log(`username: ${username}\npassword: ${password}`);

  //db = await getDb(0);

  login(username, password);
});

function login(uname, passw) {
  // cuz we care about security, of course
  const hashed = SHA256(passw);
  const stmt = `select password from Users where username='${uname}' and password='${hashed}'`;
  const res = null; //db.exec(stmt);

  loginMsg.style.display = "block";
  if (false && (res.length !== 1 || hashed !== res[0]["values"][0])) {
    // login failed
    loginMsg.innerHTML = "Login failed! Try again maybe?";
    return;
  }

  loginMsg.innerHTML = `Success, you have obtained the token: ${getFlag()}`;
}

function getFlag() {
  return "needle";
}
