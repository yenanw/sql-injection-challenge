/**
 *  I wanted to comment this but I give up
 */
export default function infoBtn(
  {
    title: titleText,
    description: desc,
    goal: goalText,
    hints: hintsArr,
    btnText: text,
  },
  root
) {
  // TODO: add css maybe?
  const panel = document.createElement("div");
  panel.setAttribute("class", "info-panel");

  const title = document.createElement("p");
  title.innerHTML = titleText;
  title.setAttribute("class", "info-panel-title");

  const goal = document.createElement("p");
  goal.innerHTML = goalText;
  goal.setAttribute("class", "info-panel-goal");

  const description = document.createElement("p");
  description.innerHTML = desc;
  description.setAttribute("class", "info-panel-description");

  const hints = document.createElement("ul");
  const hintsHeader = document.createElement("p");
  hintsHeader.innerHTML = "Hints";
  hintsHeader.setAttribute("class", "info-panel-hints-header");

  hints.appendChild(hintsHeader);
  hintsArr.forEach((hint) => {
    const li = document.createElement("li");
    li.innerHTML = hint;
    hints.appendChild(li);
  });
  hints.setAttribute("class", "info-panel-hints");

  const closeBtn = document.createElement("button");
  const closeIcon = document.createElement("span");
  closeIcon.innerHTML = "&times;";
  closeBtn.appendChild(closeIcon);
  closeBtn.setAttribute("class", "info-panel-close");

  panel.appendChild(title);
  panel.appendChild(closeBtn);
  panel.appendChild(description);
  panel.appendChild(goal);
  panel.appendChild(hints);
  panel.style.display = "none";

  const btn = document.createElement("button");
  if (text === undefined) {
    text = "Info";
  }
  btn.innerHTML = text;
  btn.setAttribute("class", "info-btn");

  closeBtn.addEventListener("click", () => {
    panel.style.display = "none";
    btn.disabled = false;
  });

  btn.addEventListener("click", () => {
    btn.disabled = true;
    panel.style.display = "block";
  });

  root.appendChild(btn);
  root.appendChild(panel);
}
