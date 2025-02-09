const input = document.querySelector("input");
const search = document.querySelector(".search-btn");
const result = document.querySelector(".result");

const searchPoke = async (pokeName) => {
  try {
    if (!pokeName) {
      result.innerHTML = `<h1>Nhập tên Pokemon điii</h1>`;
      return;
    }
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);

    const data = await res.json();

    return data;
  } catch (error) {
    result.innerHTML = `<h1>Không tìm thấy</h1>`;
    return error;
  }
};

const displayData = async () => {
  const name = input.value;
  const poke = await searchPoke(name);

  result.style.display = "flex";
  result.innerHTML = `
          <div class="image">
            <img src="${poke.sprites.front_default}"/>
          </div>
          <div class="infor"> 
            <p class="name">${poke.name}</p>
            <p class="id"><span>Id: </span>${poke.id}</p>
            <p class="height"><span>Height: </span>${poke.height / 10} m</p>
            <p class="weight"><span>Weight: </span>${poke.weight / 10} kg</p>
            <p class="type">
                <span>Type: </span>
                ${poke.types.map((t) => t.type.name).join(", ")}
            </p>
          </div>
        `;
};

search.addEventListener("click", displayData);

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    displayData();
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
