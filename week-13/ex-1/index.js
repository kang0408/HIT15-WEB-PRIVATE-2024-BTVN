const checkButton = document.querySelector(".check-btn");
const inputBox = document.querySelector(".input-box");
const resultDiv = document.querySelector(".result");

checkButton.addEventListener("click", () => {
  const input = inputBox.value;
  if (input.trim() === "") {
    resultDiv.innerHTML = "<p>Hãy nhập đúng chuỗi kí tự</p>";
    return;
  }

  const normalized = input.toLowerCase();
  const reversed = normalized.split("").reverse().join("");
  const isPalindrome = normalized === reversed;

  resultDiv.innerHTML =
    "<p>" +
    (isPalindrome ? "Đây là palindrome!" : "Đây không phải palindrome.") +
    "</p>";

  resultDiv.innerHTML += "<div>";
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    const normalizedChar = char.toLowerCase();
    const correct = normalizedChar === normalized[normalized.length - 1 - i];
    const className = correct ? "char correct" : "char incorrect";
    resultDiv.innerHTML += `<span class="${className}">${char}</span>`;
  }
  resultDiv.innerHTML += "</div>";
});

inputBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    checkButton.click();
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
