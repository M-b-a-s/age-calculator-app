// DOM Elements
const form = document.querySelector("form");
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const submitBtn = document.getElementById("submit");
const yearOutput = document.getElementById("years");
const monthOutput = document.getElementById("months");
const dayOutput = document.getElementById("days");
const dayErr = document.getElementById("day-error");
const monthErr = document.getElementById("month-error");
const yearErr = document.getElementById("year-error");

const date = new Date();
const currentYear = date.getFullYear();

// Input values(Global)
let day;
let month;
let year;

// Event listener for form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get input values(local)
  day = parseInt(dayInput.value);
  month = parseInt(monthInput.value);
  year = parseInt(yearInput.value);

  // Check if date is invalid
  const validDate = new Date(year, month, 0).getDate();

  // Validate day, month, and year
  if (day < 1 || day > validDate) {
    dayErr.style.display = "block";
    dayInput.style.borderColor = "red";
    document.querySelector("[for='day']").style.color = "red";
  } else {
    dayErr.style.display = "none";
    dayInput.style.borderColor = "";
    document.querySelector("[for='day']").style.color = "";
  }

  if (month < 1 || month > 12) {
    monthErr.style.display = "block";
    monthInput.style.borderColor = "red";
    document.querySelector("[for='month']").style.color = "red";
  } else {
    monthErr.style.display = "none";
    monthInput.style.borderColor = "";
    document.querySelector("[for='month']").style.color = "";
  }

  if (year > currentYear) {
    yearErr.style.display = "block";
    yearInput.style.borderColor = "red";
    document.querySelector("[for='year']").style.color = "red";
  } else {
    yearErr.style.display = "none";
    yearInput.style.borderColor = "";
    document.querySelector("[for='year']").style.color = "";
  }

  const dob = year + "-" + month + "-" + day;

  // check year validity
  if (year > currentYear || (month < 1 || month > 12) || (day < 1 || day > validDate)) {
    yearOutput.textContent = '--'
    monthOutput.textContent = '--';
    dayOutput.textContent = '--';
    return 0;
  } else {
    calculateAge(dob)
  }

  // calculateAge(dob);
  console.log(calculateAge(dob))
  

});


// calculate age in years, months and days
const calculateAge = (dob) => {
  const birthDate = new Date(dob);

  // Calculate the difference in years
  let ageYears = currentYear - birthDate.getFullYear();

  // Calculate the difference in months
  let ageMonths = date.getMonth() - birthDate.getMonth();
  if (ageMonths <= 0) {
    if (ageYears == 0) {
      ageYears = 0;
    } else {
      ageYears--;
      ageMonths += 12;
    }
  }

  // Calculate the difference in days
  let ageDays = date.getDate() - birthDate.getDate();
  if (ageDays <= 0) {
    const lastDayOfMonth = new Date(
      date.getFullYear(),
      date.getMonth(),
      0
    ).getDate();
    if (ageMonths == 0) {
      ageMonths = 0;
    } else {
      ageMonths--;
      ageDays += lastDayOfMonth;
    }
  }

  yearOutput.textContent = ageYears;
  monthOutput.textContent = ageMonths;
  dayOutput.textContent = ageDays;

};

const updateResult = () => {}