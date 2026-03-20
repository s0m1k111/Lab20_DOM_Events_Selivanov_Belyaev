console.log(document);

const title = document.getElementById("title");
const text = document.querySelector(".text");

console.log(title);
console.log(text);

title.textContent = "DOM изменён через JS!";
title.style.color = "blue";
title.style.backgroundColor = "#f0f0f0";
title.style.padding = "10px";

text.style.fontSize = "18px";
text.style.fontStyle = "italic";
text.style.color = "darkgreen";

const button = document.getElementById("btn");

button.addEventListener("click", () => {
  alert("Кнопка была нажата!");
  button.style.backgroundColor = "#4CAF50";
  button.style.color = "white";
});

const input = document.getElementById("nameInput");
const showNameButton = document.getElementById("showName");
const output = document.getElementById("output");

button.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    output.textContent = `Привет, ${input.value}!`;
    output.style.color = "green";
  } else {
    output.textContent = "Пожалуйста, введите имя!";
    output.style.color = "red";
  }
});

const clearButton = document.getElementById("clearButton");

clearButton.addEventListener("click", () => {
  input.value = "";
  output.textContent = "";
  output.style.color = "";
  input.focus();
});
