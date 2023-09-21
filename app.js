// DOM Elements
const form = document.querySelector('form');
const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const submitBtn = document.getElementById('submit');
const yearOutput = document.getElementById('years'); 
const monthOutput = document.getElementById('months'); 
const dayOutput = document.getElementById('days');
const dayErr = document.getElementById('day-error');
const monthErr = document.getElementById('month-error');
const yearErr = document.getElementById('year-error');

const date = new Date();
const currentYear = date.getFullYear();

// Input values(Global)
let day;
let month;
let year;

// Event listener for form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get input values
   day = parseInt(dayInput.value);
   month = parseInt(monthInput.value);
   year = parseInt(yearInput.value);

    // Validate day, month, and year
    if (day < 1 || day > 31) {
        dayErr.style.display = 'block';
        dayInput.style.borderColor = 'red'
        document.querySelector("[for='day']").style.color = 'red'
    } else {
        dayErr.style.display = 'none';
        dayInput.style.borderColor = ''
        document.querySelector("[for='day']").style.color = ''
    }

    if (month < 1 || month > 12) {
        monthErr.style.display = 'block';
        monthInput.style.borderColor = 'red';
        document.querySelector("[for='month']").style.color = 'red';
    } else {
        monthErr.style.display = 'none';
        monthInput.style.borderColor = '';
        document.querySelector("[for='month']").style.color = '';
    }

    if (year > currentYear) {
        yearErr.style.display = 'block';
        yearInput.style.borderColor = 'red'
        document.querySelector("[for='year']").style.color = 'red';
    } else {
        yearErr.style.display = 'none';
        yearInput.style.borderColor = '';
        document.querySelector("[for='year']").style.color = ''
    }

    calculateAge()
});

/*
* calculateAge - computes age in years, months and days
* desc: assumes an average number of days
* @years: variable to show day in the DOM
* @months: variable to show months in the DOM
* @days: variable to show days in the DOM 
*/


// calculate age in years, months and days
const calculateAge = (years, months, days) => {
    years = parseInt(currentYear - year);
    months = parseInt(years * 12);

    // number of days
    let averageNumDays = 30.44;
    days = Math.round(months * averageNumDays);

    !(year > 2023) ? document.getElementById('years').textContent = years : null;

    !(year > 2023) ? document.getElementById('months').textContent = months :null;

    !(year > 2023) ? document.getElementById('days').textContent = days : null;

}