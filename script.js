function toggler() {
  const checkBox = document.getElementById("toggle");
  const contain = document.getElementById("contain");
  const icon = document.getElementById("icon");
  const weather = document.getElementById("weather-description");
  const temperature = document.getElementById("weather-degree");
  const subtemperature = document.getElementById("weather-subdegree");

  if (checkBox.checked == true){
    contain.setAttribute("data-theme", "dark");
    icon.src = "/images/icon_thunder.png"
    document.body.style.backgroundColor = "#16213E";
    weather.innerHTML = "Rainy Night";
    temperature.innerHTML = "11&deg";
    subtemperature.innerHTML = "feels like 7&deg";
  } else {
    contain.setAttribute("data-theme", "light");
    icon.src = "/images/icon_sun.png"
    document.body.style.backgroundColor = "#cecece";
    weather.innerHTML = "Cloudy Day";
    temperature.innerHTML = "20&deg";
    subtemperature.innerHTML = "feels like 17&deg";
  }
}