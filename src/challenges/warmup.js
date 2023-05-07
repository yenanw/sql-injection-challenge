import { SHA256 } from "crypto-js";

import { getDatabase } from "../util/db.js";

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginMsg = document.getElementById("login-msg");

const db = await getDatabase("challenge1.sqlite");

loginButton.addEventListener("click", async (e) => {
  e.preventDefault();

  const username = loginForm.username.value;
  const password = loginForm.password.value;

  // because we respect security, of course
  console.log(`username: ${username}\npassword: ${password}`);

  login(username, password);
});

function login(uname, passw) {
  // cuz we care about security, of course
  const hashed = SHA256(passw);
  const stmt = `select password from Users where user='${uname}' and password='${hashed}'`;
  const res = db.exec(stmt);

  loginMsg.style.display = "block";
  if (res.length !== 1 || hashed !== res[0]["values"][0]) {
    // login failed
    loginMsg.innerHTML = "Login failed! Try again maybe?";
    return;
  }

  loginMsg.innerHTML = `Success, welcome to Synringe's Shop ${uname}!`;
}
