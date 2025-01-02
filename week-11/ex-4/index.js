// Get input element
const input = document.querySelector("input");
// Get add button element
const addBtn = document.querySelector(".add-btn");
// Get list element
const list = document.querySelector("ul.list");
// Get correct and error character element
const correctCharacter = document.querySelector(".result .correct");
const errorCharacter = document.querySelector(".result .error");
// Get message element
const msg = document.querySelector("#container .msg");
// Biến lưu 1 ký tự khi tạo
let item;
// Biến lưu chuỗi cần kiểm tra chính tả
let compareStr = "";
// Biến lưu 1 ký tự cần kiểm tra
let compareItem;
// Số lần nhấn phím
let step = 0;
// Kiểm tra đúng sai
let correctFlag = false;
let errorFlag = false;
let correctChar = 0;
let errorChar = 0;

// Reset variables
function reset() {
  list.innerHTML = "";
  step = 0;
  compareStr = "";
  correctFlag = false;
  errorFlag = false;
  correctChar = 0;
  errorChar = 0;
  correctCharacter.innerHTML = correctChar;
  errorCharacter.innerHTML = errorChar;
  msg.innerHTML = "";
}

// Add event listener click for add button
addBtn.addEventListener("click", function () {
  if (input.value == "") return;
  reset();

  for (let i = 0; i < input.value.length; i++) {
    item = document.createElement("li");
    item.innerHTML = input.value[i];
    list.appendChild(item);
  }
  compareStr = input.value;
  document.addEventListener("keydown", validate);
});

function validate(e) {
  if (compareStr == "") return;
  if (step == compareStr.length - 1) {
    document.removeEventListener("keydown", validate);
    correctCharacter.innerHTML = correctChar;
    errorCharacter.innerHTML = errorChar;

    if (correctFlag) msg.innerHTML = "Đúng chính tả rồi cậu ơi!";
    if (errorFlag) msg.innerHTML = "Sai chính tả từa lưa rồi cậu ơi!";
  }

  compareItem = document.querySelector(`ul li:nth-child(${step + 1})`);
  if (e.key == compareStr[step]) {
    compareItem.style.background = "#79d7be";
    correctFlag = true;
    correctChar++;
  } else {
    compareItem.style.background = "#FD5E53";
    errorFlag = true;
    errorChar++;
  }

  step++;
}

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
