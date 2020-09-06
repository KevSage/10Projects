const newYears = "2021 01-01 00:00";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();
  let seconds = (newYearsDate - currentDate) / 1000;
  let days = Math.floor(seconds / 3600 / 24);
  let hours = Math.floor(seconds / 3600) % 24;
  let minutes = Math.floor(seconds / 60) % 60;
  let secondly = Math.floor(seconds % 60);
  let day = document.querySelector("#days");
  let hour = document.querySelector("#hours");
  let minute = document.querySelector("#minutes");
  let second = document.querySelector("#seconds");

  day.textContent = days;
  hour.textContent = hours;
  minute.textContent = minutes;
  second.textContent = secondly;
}

setInterval(countdown, 1000);
countdown();
