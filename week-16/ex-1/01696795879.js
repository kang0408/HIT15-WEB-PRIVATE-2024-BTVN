const input = document.querySelector("input");
const search = document.querySelector(".search-btn");
const result = document.querySelector(".result");

const searchCountry = async (countryName) => {
  try {
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`
    );

    const data = await res.json();

    return data[0];
  } catch (error) {
    return error;
  }
};

const displayData = async () => {
  const name = input.value;
  const country = await searchCountry(name);

  if (!country) {
    result.innerHTML = `<h1>Không tìm thấy</h1>`;
    return;
  }
  result.innerHTML = `
          <div class="flag">
            <img src="${country.flags.png}"/>
          </div>
          <div class="infor"> 
            <p class="name">${country.name.common}</p>
            <p class="region"><span>Region: </span>${country.region}</p>
            <p class="capital"><span>Capital: </span>${country.capital}</p>
            <p class="population"><span>Population: </span>${country.population.toLocaleString(
              "vi-VN"
            )}</p>
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
