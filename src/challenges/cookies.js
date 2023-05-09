import { getDatabase } from "../util/db.js";
import infoBtn from "../util/infoBtn.js";

// Add Cookie to browser if not present
if (!localStorage.getItem("COOKIE")) {
  localStorage.setItem("COOKIE", "cookie_value");
}

// Fetch database file
const db = await getDatabase("challenge1.sqlite");


// Function to fetch all posts from database
function getPosts(db) {
  let posts = db.exec(`SELECT * FROM posts ORDER BY id DESC;`)[0]
    .values;

  // Create HTML-elements for each posts
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

// Info button that displays the goal and some hints about the current challenge
infoBtn(
  {
    title: "Cookie Monster",
    description: "You are shown the homepage of user pablo since his cookie is stored in the browser. Is there any way you can exploit this maybe?",
    goal: "The goal of this challenge is to find the password of the user named admin.",
    hints: ["The local storage of the browser is probably a good start.", "This injection is a blind one.", "See what happens if you change the cookie value..."],
    btnText: "Info",
  },
  document.getElementById("root")
);


// Wrap application code in try-catch, if error occurs display "You are not logged in"-page
try {

  // Get cookie, and try to fetch the username corresponding to that cookie in database
  let cookie = localStorage.getItem("COOKIE");
  let cookieStmt = `SELECT username FROM TrackedUsers where cookie_value = '${cookie}'`;
  let usernameRes = db.exec(cookieStmt);
  const username = usernameRes[0].values[0][0];

  // Conditional to show "Welcome back" screen
  if (usernameRes) {
    // Display "Welcome back"-page if username was fetched without errors
    document.getElementById("welcome-back").style.display = "block";
    document.getElementById("username-span").textContent = ` ${username}!`;

    // Get posts from db
    let postTags = getPosts(db);
    let forumPostsDiv = document.getElementById("forum-posts");
    forumPostsDiv.innerHTML = postTags.join("");

    // Add button and eventListener that creates a new post in db if pressed
    const button = document.getElementById('button');
    button.addEventListener('click', function (event) {

      const text = document.getElementById("text-area").value;


      if (text) {

        // Insert text from the text-area to posts table, prepared statement
        let insertStmt = db.prepare("INSERT INTO posts (user, content) VALUES (?, ?)");
        insertStmt.bind([username, text]);
        // Execute statement
        insertStmt.step();
        // Free memory to prevent memory leaks
        insertStmt.free();


        // Get current posts and update HTML
        postTags = getPosts(db);
        forumPostsDiv.innerHTML = postTags.join("");
        document.getElementById("text-area").value = "";

      }
    });

  }

  // If error occurs, show "Not logged in"-page
} catch (err) {
  document.getElementById("not-logged-in").style.display = "block";
  console.log("An error occurred, but I'm not tellin...");
}

