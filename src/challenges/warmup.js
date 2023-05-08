import { SHA256 } from "crypto-js";

import { getDatabase } from "../util/db.js";
import infoBtn from "../util/infoBtn.js";

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginMsg = document.getElementById("login-msg");

const db = await getDatabase("challenge1.sqlite");

infoBtn(
  {
    title: "Warmup",
    description:
      "Synringe's Shop is an exclusive webshop for only the most premium clients. All users are registered through invitation. You want to buy some goodies from them, but you don't an account. What do you do?",
    goal: "Successfully log into the webshop.",
    hints: ["Try anything, anything works."],
  },
  document.getElementById("root")
);

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

  // gotta make sure the site is robust amirite
  try {
    const res = db.exec(stmt);
    const passwordCol = res[0].values;

    // the query returned then it must mean that the user is legit
    if (passwordCol.length >= 1) {
      // login success
      loginMsg.innerHTML = `Success, welcome to Syringe's Shop ${uname}!`;

      // TODO: change the page layout when success?
    } else {
      throw new Error("Login failed!");
    }
  } catch (err) {
    console.log(err);
    loginMsg.innerHTML = "Login failed! Try again maybe?";
  }

  loginMsg.style.display = "block";
}
