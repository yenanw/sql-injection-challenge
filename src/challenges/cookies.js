import { getDatabase } from "../util/db.js";
import infoBtn from "../util/infoBtn.js";

if (!localStorage.getItem("COOKIE")) {
  localStorage.setItem("COOKIE", "cookie_value");
}

const db = await getDatabase("challenge1.sqlite");

function getPosts(db) {
  let posts = db.exec(`SELECT * FROM posts ORDER BY id DESC;`)[0]
  .values;

  const postTags = posts.map((post) => {
    return `
      <style>
        .message {margin-bottom: 15px;}
        .user {float:left; font-weight:bold; color:#009; margin-bottom: 5px; margin-right: 10px;}
        .content { margin-left: 30px;margin-right: 10px;font-style:italic; color:#; }
      </style>

      <div class="message">
        <div class="user">${post[1]}: </div>
        <div class="content">${post[2]}</div>
      </div>
    `;
  });

  return postTags;
}

infoBtn(
  {
    title: "Cookie Monster",
    description: "You are shown the homepage of user pablo since his cookie is stored in the browser. Is there any way you can exploit this maybe?",
    goal: "The goal of this challenge is to find the password of the user named admin.",
    hints: ["The local storage of the browser is probably a good start.", "This injection is a blind one."],
    btnText: "Info",
  },
  document.getElementById("root")
);

try {
  let cookie = localStorage.getItem("COOKIE");

  let cookieStmt = `SELECT username FROM TrackedUsers where cookie_value = '${cookie}'`;
  let usernameRes = db.exec(cookieStmt);
  const username = usernameRes[0].values[0][0];

  // Conditional to show "Welcome back" screen
  if (usernameRes) {
    document.getElementById("welcome-back").style.visibility = "visible";
    document.getElementById("username-span").textContent = ` ${username}!`;

    // let posts = db.exec(`SELECT * FROM posts ORDER BY id DESC;`)[0]
    //   .values;

    // const postTags = posts.map((post) => {
    //   return `
    //     <style>
    //       .message {margin-bottom: 15px;}
    //       .user {float:left; font-weight:bold; color:#009; margin-bottom: 5px; margin-right: 10px;}
    //       .content { margin-left: 30px;margin-right: 10px;font-style:italic; color:#; }
    //     </style>

    //     <div class="message">
    //       <div class="user">${post[1]}: </div>
    //       <div class="content">${post[2]}</div>
    //     </div>
    //   `;
    // });

    let postTags = getPosts(db);
    let forumPostsDiv = document.getElementById("forum-posts");
    forumPostsDiv.innerHTML = postTags.join("");


    const button = document.getElementById('button');

    button.addEventListener('click', function (event) {
      const text = document.getElementById("text-area").value;
      
      if (text){
        let insertStmt =  db.prepare("INSERT INTO posts (user, content) VALUES (?, ?)");
        insertStmt.bind([username, text]);
        insertStmt.step();
        insertStmt.free();
        
        postTags = getPosts(db);
        forumPostsDiv.innerHTML = postTags.join("");
        document.getElementById("text-area").value = "";

      }




    });

  }
} catch (err) {
  document.getElementById("not-logged-in").style.visibility = "visible";
  console.log("An error occurred, but I'm not tellin...");
}

// Injection: cookie_value' AND (SELECT SUBSTRING((SELECT password from users where user = "pablo"),1,1) = "l") --
