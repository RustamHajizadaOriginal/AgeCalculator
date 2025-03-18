//===============Written in Luxon-Based Approach
//Importing the data time class from Luxon
// const { DateTime } = require("luxon");
// Note: In a browser environment, Luxon is included via a script tag in the HTML file
// Rebasing did not worked !!

const calculateAge = () => {
  // Get the input element and result element
  const userInputEl = document.getElementById("date");
  const result = document.getElementById("result");

  // Get the birthdate from the input field
  const birthdate = userInputEl.value;

  // Validate the birthdate
  if (!birthdate) {
    result.innerHTML = "Please enter a valid birthdate";
    return;
  }

  try {
    // Parse the birthdate using Luxon
    const birthDate = luxon.DateTime.fromISO(birthdate);

    // Get the current date and time
    const now = luxon.DateTime.now();

    // Check if the birthdate is in the future
    if (birthDate > now) {
      result.innerHTML =
        "Birthdate cannot be in the future. Please enter a valid date.";
      return;
    }

    // Calculate the age in years
    const age = now.year - birthDate.year;

    // Calculate the months and days
    const months = now.month - birthDate.month;
    const days = now.day - birthDate.day;

    // Adjust for negative months and days
    if (days < 0) {
      const previousMonth = now.minus({ days: now.day }).month;
      const daysInPreviousMonth = now.minus({ days: now.day }).daysInMonth;
      days += daysInPreviousMonth;
      months -= 1;
    }

    if (months < 0) {
      months += 12;
      age -= 1;
    }

    // Display the result
    result.innerHTML = `Ooo My GOD!! You are <span class="year">${age}</span> years, <span class="month">${months}</span> months and <span class="day">${days}</span> days old, That is an achievement!!!`;
  } catch (error) {
    // Handle invalid birthdate format
    result.innerHTML = "Invalid birthdate format. Please enter a valid date.";
  }
};
