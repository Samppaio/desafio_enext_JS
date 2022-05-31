navigator.geolocation.getCurrentPosition(success);

JSON.parse(localStorage.getItem("savedWeather"));

const info = JSON.parse(localStorage.getItem("savedWeather")) || [];

info.map((response) => {
  const tbody = document.getElementById("savedInfo_list");

  const tr = tbody.insertRow();
  const td_id = tr.insertCell();
  const td_temp = tr.insertCell();
  const td_desc = tr.insertCell();
  const td_time = tr.insertCell();
  const td_date = tr.insertCell();

  const savedIcon = document.createElement("img");

  if (response.id == 800) {
    savedIcon.setAttribute(
      "src",
      "http://openweathermap.org/img/wn/01d@2x.png"
    );
    savedIcon.setAttribute("alt", "condição climática");
    td_id.appendChild(savedIcon);
  }
  if (response.id == 801) {
    savedIcon.setAttribute(
      "src",
      "http://openweathermap.org/img/wn/02d@2x.png"
    );
    savedIcon.setAttribute("alt", "condição climática");
    td_id.appendChild(savedIcon);
  }
  if (response.id === 802) {
    savedIcon.setAttribute(
      "src",
      "http://openweathermap.org/img/wn/03d@2x.png"
    );
    savedIcon.setAttribute("alt", "condição climática");
    td_id.appendChild(savedIcon);
  }
  if (response.id == 803 || response.id == 804) {
    savedIcon.setAttribute(
      "src",
      "http://openweathermap.org/img/wn/04d@2x.png"
    );
    savedIcon.setAttribute("alt", "condição climática");
    td_id.appendChild(savedIcon);
  }
  if (
    response.id == 300 ||
    response.id <= 321 ||
    response.id == 520 ||
    response.id <= 531
  ) {
    savedIcon.setAttribute(
      "src",
      "http://openweathermap.org/img/wn/09d@2x.png"
    );
    savedIcon.setAttribute("alt", "condição climática");
    td_id.appendChild(savedIcon);
  }
  if (response.id == 500 || response.id <= 504) {
    savedIcon.setAttribute(
      "src",
      "http://openweathermap.org/img/wn/10d@2x.png"
    );
    savedIcon.setAttribute("alt", "condição climática");
    td_id.appendChild(savedIcon);
  }
  if (response.id == 200 || response.id <= 232) {
    savedIcon.setAttribute(
      "src",
      "http://openweathermap.org/img/wn/11d@2x.png"
    );
    savedIcon.setAttribute("alt", "condição climática");
    td_id.appendChild(savedIcon);
  }
  if (response.id == 511 || response.id == 600 || response.id <= 622) {
    savedIcon.setAttribute(
      "src",
      "http://openweathermap.org/img/wn/13d@2x.png"
    );
    savedIcon.setAttribute("alt", "condição climática");
    td_id.appendChild(savedIcon);
  }
  if (response.id == 701 || response.id <= 781) {
    savedIcon.setAttribute(
      "src",
      "http://openweathermap.org/img/wn/50d@2x.png"
    );
    savedIcon.setAttribute("alt", "condição climática");
    td_id.appendChild(savedIcon);
  }

  td_temp.innerText = response.temp;
  td_desc.innerText = response.desc;
  td_time.innerText = response.time;
  td_date.innerText = response.date;
});

function success(position) {
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=f22aaa4c4b3bb7aeb5f99b4e61ccc920`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const icon = document.getElementById("temp_icon");
      const desc = document.getElementById("info");

      const img = document.createElement("img");
      const h1 = document.createElement("h1");
      const p = document.createElement("p");

      const id = data.weather[0].id;
      const k = data.main.temp;
      const c = k - 273;
      const description = data.weather[0].description;
      const hour = new Date().getHours();
      const minute = new Date().getMinutes();
      const date = new Date().getDate();
      const month = new Date().getMonth() + 1;
      const year = new Date().getFullYear();

      if (id == 800) {
        img.setAttribute("src", "http://openweathermap.org/img/wn/01d@2x.png");
        img.setAttribute("alt", "condição climática");
        icon.appendChild(img);
      }
      if (id == 801) {
        img.setAttribute("src", "http://openweathermap.org/img/wn/02d@2x.png");
        img.setAttribute("alt", "condição climática");
        icon.appendChild(img);
      }
      if (id === 802) {
        img.setAttribute("src", "http://openweathermap.org/img/wn/03d@2x.png");
        img.setAttribute("alt", "condição climática");
        icon.appendChild(img);
      }
      if (id == 803 || id == 804) {
        img.setAttribute("src", "http://openweathermap.org/img/wn/04d@2x.png");
        img.setAttribute("alt", "condição climática");
        icon.appendChild(img);
      }
      if (id == 300 || id <= 321 || id == 520 || id <= 531) {
        img.setAttribute("src", "http://openweathermap.org/img/wn/09d@2x.png");
        img.setAttribute("alt", "condição climática");
        icon.appendChild(img);
      }
      if (id == 500 || id <= 504) {
        img.setAttribute("src", "http://openweathermap.org/img/wn/10d@2x.png");
        img.setAttribute("alt", "condição climática");
        icon.appendChild(img);
      }
      if (id == 200 || id <= 232) {
        img.setAttribute("src", "http://openweathermap.org/img/wn/11d@2x.png");
        img.setAttribute("alt", "condição climática");
        icon.appendChild(img);
      }
      if (id == 511 || id == 600 || id <= 622) {
        img.setAttribute("src", "http://openweathermap.org/img/wn/13d@2x.png");
        img.setAttribute("alt", "condição climática");
        icon.appendChild(img);
      }
      if (id == 701 || id <= 781) {
        img.setAttribute("src", "http://openweathermap.org/img/wn/50d@2x.png");
        img.setAttribute("alt", "condição climática");
        icon.appendChild(img);
      }

      h1.innerHTML = `${parseInt(c)}ºC`;
      p.innerHTML = description;

      desc.appendChild(h1);
      desc.appendChild(p);

      const savedInfo = {
        id: id,
        temp: `${parseInt(c)}ºC`,
        desc: description,
        time: `${hour}:${minute}`,
        date: `${date}.${month}.${year}`,
      };

      info.push(savedInfo);
    })
    .catch((error) => {
      console.log(error);
    });
}

function handleSaveInfo() {
  localStorage.setItem("savedWeather", JSON.stringify(info));
}
