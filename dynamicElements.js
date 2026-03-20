const addUserBtn = document.getElementById("addUserBtn");
const usersList = document.getElementById("usersList");
const listItem = document.getElementById("usersList");

let userCounter = 1;

function updateUserStats() {
  const userCount = usersList.children.length;
  userStats.textContent = `Всего пользователей: ${userCount}`;
}

addUserBtn.addEventListener("click", () => {
  const listItem = document.createElement("li");

  const userText = document.createTextNode(`Пользователь #${userCounter}`);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Удалить";
  deleteBtn.className = "delete-btn";

  listItem.appendChild(userText);
  listItem.appendChild(deleteBtn);
  listItem.id = `user-${userCounter}`;

  usersList.appendChild(listItem);

  userCounter++;
  updateUserStats();
});

usersList.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    const listItem = event.target.parentElement;
    listItem.remove();
    updateUserStats();
  }
});

updateUserStats();
