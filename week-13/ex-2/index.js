const addButton = document.querySelector(".add-btn");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");
let tasks = []; // Array to store tasks

// Function to render tasks
function renderTasks() {
  todoList.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    const listItem = document.createElement("li");
    listItem.className = "todo-item";
    listItem.innerHTML = `
          <span>${tasks[i]}</span>
          <button class="delete-btn" data-index="${i}">Delete</button>
        `;
    todoList.appendChild(listItem);
  }

  const delBtnList = document.querySelectorAll(".delete-btn");
  for (let i = 0; i < delBtnList.length; i++) {
    delBtnList[i].addEventListener("click", (e) => {
      const index = e.target.getAttribute("data-index");
      tasks.splice(index, 1);
      renderTasks();
    });
  }
}

// Function to add a task
addButton.addEventListener("click", () => {
  const task = todoInput.value.trim();
  if (task !== "") {
    tasks.push(task); // Add task to array
    todoInput.value = "";
    renderTasks(); // Re-render tasks
  }
});

// Optional: Allow adding tasks with Enter key
todoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addButton.click();
  }
});

// vô hiệu hóa trick lỏ
document.addEventListener("contextmenu", function (event) {
  event.preventDefault(); // Ngăn menu chuột phải
  alert("Chuột phải đã bị vô hiệu hóa!");
});

document.addEventListener("keydown", function (event) {
  // Ngăn chặn F12
  if (event.key === "F12") {
    event.preventDefault();
    alert("F12 đã bị vô hiệu hóa!");
  }
  // Ngăn chặn tổ hợp Ctrl+Shift+I (Mở DevTools)
  if (event.ctrlKey && event.shiftKey && event.key === "I") {
    event.preventDefault();
    alert("Ctrl+Shift+I đã bị vô hiệu hóa!");
  }
  // Ngăn chặn tổ hợp Ctrl+Shift+J (Mở DevTools - console)
  if (event.ctrlKey && event.shiftKey && event.key === "J") {
    event.preventDefault();
    alert("Ctrl+Shift+J đã bị vô hiệu hóa!");
  }
  // Ngăn chặn Ctrl+U (Xem mã nguồn trang)
  if (event.ctrlKey && event.key === "u") {
    event.preventDefault();
    alert("Ctrl+U đã bị vô hiệu hóa!");
  }
});
