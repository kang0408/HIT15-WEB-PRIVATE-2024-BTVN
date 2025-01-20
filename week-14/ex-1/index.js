const addButton = document.querySelector(".add-btn");
const todoInput = document.querySelector(".todo-input");
const todoDateTime = document.querySelector(".todo-datetime");
const todoTag = document.querySelector(".todo-tag");
const todoList = document.querySelector(".todo-list");
let tasks = [];

// Function to render tasks
function renderTasks() {
  todoList.innerHTML = "";
  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.className = `todo-item ${task.completed ? "completed" : ""}`;
    listItem.innerHTML = `
      <p>${task.text}</p>
      <div>${task.datetime ? `📅 ${task.datetime}` : ""}</div>
      <div>${task.tag ? `🏷️ ${task.tag}` : ""}</div>
      <div class="actions">
        <button class="complete-btn" data-index="${index}">${
      task.completed ? "Undo" : "Complete"
    }</button>
        <button class="edit-btn" data-index="${index}">Edit</button>
        <button class="delete-btn" data-index="${index}">Delete</button>
      </div>
    `;
    todoList.appendChild(listItem);
  });

  // Add event listeners to buttons
  document.querySelectorAll(".delete-btn").forEach((button) => {
    button.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      tasks.splice(index, 1);
      renderTasks();
    });
  });

  document.querySelectorAll(".complete-btn").forEach((button) => {
    button.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      tasks[index].completed = !tasks[index].completed;
      renderTasks();
    });
  });

  let isEdit = false;
  document.querySelectorAll(".edit-btn").forEach((button) => {
    button.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      const todoItem = document.querySelectorAll(".todo-item")[index];
      if (!isEdit) {
        const content = todoItem.querySelector("p");
        const input = document.createElement("textarea");
        input.value = content.innerHTML;
        todoItem.replaceChild(input, content);
        button.style.background = "#28a745";
        button.innerHTML = "Save";
        isEdit = true;
      } else {
        const editContent = todoItem.querySelector("textarea");
        tasks[index].text = editContent.value;
        renderTasks();
        isEdit = false;
      }
    });
  });
}

// Ngày trong tuần (0: Chủ nhật, 1: Thứ hai, ...)
const weekdays = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];

function formatDateHandler(inputDate) {
  const date = new Date(inputDate); // Chuyển đổi thành đối tượng Date

  // Lấy các thành phần cần thiết
  const hours = date.getHours().toString().padStart(2, "0"); // Lấy giờ, đảm bảo 2 chữ số
  const minutes = date.getMinutes().toString().padStart(2, "0"); // Lấy phút, đảm bảo 2 chữ số
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Tháng (0-indexed)
  const day = date.getDate().toString().padStart(2, "0"); // Ngày
  const year = date.getFullYear(); // Năm

  const weekday = weekdays[date.getDay()]; // Lấy ngày trong tuần
  const formattedDate = `${hours}:${minutes} ${weekday} ${month}-${day}-${year}`;

  return formattedDate;
}

// Function to add a task
addButton.addEventListener("click", () => {
  const taskText = todoInput.value.trim();
  const taskDateTime = todoDateTime.value;
  const taskTag = todoTag.value.trim();
  if (taskText !== "") {
    tasks.push({
      text: taskText,
      datetime: taskDateTime ? formatDateHandler(taskDateTime) : "",
      tag: taskTag,
      completed: false,
    });
    todoInput.value = "";
    todoDateTime.value = "";
    todoTag.value = "";
    renderTasks();
  }
});

// Optional: Allow adding tasks with Enter key
todoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addButton.click();
  }
});
