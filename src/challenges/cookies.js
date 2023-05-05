import { getDatabase } from "../util/db.js";


if (!localStorage.getItem('COOKIE')) {
  localStorage.setItem('COOKIE', 'cookie_value');
}


const db = await getDatabase("challenge1.sqlite");

try {
  let cookie = localStorage.getItem('COOKIE');

  console.log(cookie);
  let stmt = `SELECT username FROM TrackedUsers where cookie_value = '${cookie}'`;
  console.log(stmt);
  let usernameRes = db.exec(stmt); // Possible security flaw.
  const username = usernameRes[0].values[0][0];


  // Conditional to show "Welcome back" screen
  if (usernameRes) {
    document.getElementById("welcome-back").style.visibility = "visible";
    document.getElementById("username-span").textContent = ` ${username}!`;

    let posts = db.exec(`SELECT * FROM posts where user = '${username}';`)[0].values;


    const postTags = posts.map(post => {
      return `
        <style>
          .message {margin-bottom: 15px;}
          .user {float:left; font-weight:bold; color:#009; margin-bottom: 5px; margin-right: 10px;}
          .content { margin-left: 30px;margin-right: 10px;font-style:italic; color:#; }
        </style>

        <div class="message">
          <div class="user">${post[0]}: </div>
          <div class="content">${post[1]}</div>
        </div>
      `;
    });

    const forumPostsDiv = document.getElementById('forum-posts');
    forumPostsDiv.innerHTML = postTags.join('');

  }

} catch (err) {
  document.getElementById("not-logged-in").style.visibility = "visible";
  console.log("An error occurred, but I'm not tellin...");
  console.log(err);
}


// Injection: cookie_value' AND (SELECT SUBSTRING((SELECT password from users where user = "pablo"),1,1) = "l") --
