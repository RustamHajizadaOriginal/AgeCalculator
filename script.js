//===============Written in Luxon-Based Approach
//Importing the data time class from Luxon
// const { DateTime } = require("luxon");
// Note: In a browser environment, Luxon is included via a script tag in the HTML file
// Rebasing did not worked !!

// Age Calculator Component
class AgeCalculator {
  constructor() {
    this.userInputEl = document.getElementById("date");
    this.resultEl = document.getElementById("result");
    this.userInputEl.addEventListener("input", this.calculateAge.bind(this));
  }

  calculateAge() {
    const birthdate = this.userInputEl.value;

    // Validate the birthdate
    if (!birthdate) {
      this.updateResult("Please enter a valid birthdate");
      return;
    }

    try {
      // Parse the birthdate using Luxon
      const birthDate = luxon.DateTime.fromISO(birthdate);

      // Get the current date and time
      const now = luxon.DateTime.now();

      // Check if the birthdate is in the future
      if (birthDate > now) {
        this.updateResult(
          "Birthdate cannot be in the future. Please enter a valid date."
        );
        return;
      }

      // Using Luxon built-in diffNow function to calculate difference
      const diff = now.diff(birthDate, ["years", "months", "days"]).toObject();

      // Round down to get whole numbers and handle potential floating point issues
      const years = Math.floor(diff.years);
      const months = Math.floor(diff.months);
      const days = Math.floor(diff.days);

      // Display the result
      this.updateResult(
        `You are <span class="year">${years}</span> years, <span class="month">${months}</span> months and <span class="day">${days}</span> days old, That is an achievement!!!`
      );
    } catch (error) {
      // Handle invalid birthdate format
      this.updateResult(
        "Invalid birthdate format. Please enter a valid date in the format YYYY-MM-DD."
      );
    }
  }

  updateResult(message) {
    this.resultEl.innerHTML = message;
    this.resultEl.setAttribute("aria-live", "polite");
  }
}

// Initialize the AgeCalculator component
const ageCalculator = new AgeCalculator();
