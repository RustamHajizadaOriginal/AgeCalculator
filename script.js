//===============Written in Luxon-Based Approach
//Importing the data time class from Luxon
const { DateTime } = require("luxon");
// function to calculate age
const calculateAge = () => {
  const userInputEl = document.getElementById("date");
  const result = document.getElementById("result");
  const birthdate = userInputEl.value;
  if (!birthdate) {
    result.innerHTML = "Please enter a valid birthdate";
    return;
  }

  try {
    const birthDate = DateTime.fromISO(birthdate);
    const now = DateTime.now();

    const age = now.diff(birthDate, "years").years;
    const months = now.diff(birthDate, "months").months % 12;
    const days = now.diff(birthDate, "days").days % 30;

    result.innerHTML = `Ooo My GOD!! You are <span class="year">${age}</span> years, <span class="month">${months}</span> months and <span class="day">${days}</span> days old, That is an achevement !!!`;
  } catch (error) {
    result.innerHTML = "Invalid birthdate format. Please enter a valid date.";
  }
};

//Written in Vanilla JavaScript
// let userInputEl = document.getElementById("date");
// userInputEl.max = new Date().toISOString().split("T")[0];
// let result = document.getElementById("result");

// const calculateAge = () => {
//   let birthDateEl = new Date(userInputEl.value);
//   let d1 = birthDateEl.getDate();
//   let m1 = birthDateEl.getMonth() + 1;
//   let y1 = birthDateEl.getFullYear();
//   let today = new Date();
//   let d2 = today.getDate();
//   let m2 = today.getMonth() + 1;
//   let y2 = today.getFullYear();

//   let d3, m3, y3;
//   y3 = y2 - y1;

//   if (m2 >= m1) {
//     m3 = m2 - m1;
//   } else {
//     y3--;
//     m3 = 12 + m2 - m1;
//   }
//   if (d2 >= d1) {
//     d3 = d2 - d1;
//   } else {
//     m3--;
//     d3 = getDaysInMonth(y1, m1) + d2 - d1;
//   }
//   if (m3 < 0) {
//     m3 = 11;
//     y3--;
//   }
//   result.innerHTML = `Ooo My GOD!! You are <span class="year">${y3}</span> years, <span class="month">${m3}</span> months and <span class="day">${d3}</span> days old, That is an achevement !!!`;
// };
// const getDaysInMonth = (year, month) => {
//   return new Date(year, month, 0).getDate();
// };
// DateTime.now()
//   .setZone("America/New_York")
//   .minus({ weeks: 1 })
//   .endOf("day")
//   .toISO();
