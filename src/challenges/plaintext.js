import { getDatabase } from "../util/db";

const prev = document.getElementById("prev-post");
const next = document.getElementById("next-post");
const postContainer = document.getElementById("post-container");

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginMsg = document.getElementById("login-msg");

const db = await getDatabase("challenge2.sqlite");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();

  const username = loginForm.username.value;
  const password = loginForm.password.value;

  login(username, password);
});

function loadPost() {
  const url = window.location.href;
  const searchParams = new URLSearchParams(url.substring(url.indexOf("?")));
  let postId = searchParams.get("id");

  try {
    // if no post specified then retrieve the latest post by default;
    if (postId == null) {
      const stmt = "select id from Posts order by date desc limit 1";
      const res = db.exec(stmt);
      postId = res[0].values[0][0];
    }

    const stmt = `select title, date, content from Posts where id='${postId}'`;
    let res = db.exec(stmt)[0].values[0];

    createPost(res[0], res[1], res[2]);
  } catch (err) {
    const notFound = document.createElement("h1");
    notFound.innerHTML = "Post not found!";
    postContainer.appendChild(notFound);
  }

  setButton(parseInt(postId) - 1, prev);
  setButton(parseInt(postId) + 1, next);
}

function setButton(postId, btn) {
  const stmt = db.prepare(`select * from Posts where id=:id`);

  try {
    const res = stmt.getAsObject({ ":id": postId });

    if (res.id) {
      btn.disabled = false;
      btn.addEventListener("click", () => {
        window.location.replace(window.location.pathname + `?id=${postId}`);
      });
      return;
    }
  } catch (err) {
    // tough luck
  } finally {
    stmt.free();
  }

  btn.disabled = true;
}

function createPost(title, date, content) {
  // this also enables XSS vulnerabilities xd
  const postTitle = document.createElement("p");
  postTitle.innerHTML = title;
  postTitle.setAttribute("class", "post-text");

  const postDate = document.createElement("em");
  postDate.innerHTML = date;
  postDate.setAttribute("class", "post-date");

  const postContent = document.createElement("p");
  postContent.innerHTML = content;
  postContent.setAttribute("class", "post-content");

  postContainer.appendChild(postTitle);
  postContainer.appendChild(postDate);
  postContainer.appendChild(postContent);
}

function login(uname, passw) {
  const stmt = db.prepare(
    `select password from Users where username=:user and password=:pass`
  );

  // gotta make sure the site is robust amirite
  try {
    const res = stmt.getAsObject({ ":user": uname, ":pass": passw });

    // the query returned then it must mean that the user is legit
    if (res.password) {
      // login success
      loginMsg.innerHTML = "Success, welcome to back admin!";

      // TODO: change the page layout when success?
    } else {
      throw new Error("Login failed!");
    }
  } catch (err) {
    loginMsg.innerHTML = "Login failed!";
  } finally {
    stmt.free();
  }

  loginMsg.style.display = "block";
}

loadPost();
