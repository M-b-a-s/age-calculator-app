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

// Event listener for form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get input values
    const day = parseInt(dayInput.value);
    const month = parseInt(monthInput.value);
    const year = parseInt(yearInput.value);

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
        document.querySelector("[for='month']").style.color = 'red'
    } else {
        monthErr.style.display = 'none';
        monthInput.style.borderColor = '';
        document.querySelector("[for='month']").style.color = ''
    }

    if (year > currentYear) {
        yearErr.style.display = 'block';
        yearInput.style.borderColor = 'red'
        document.querySelector("[for='year']").style.color = 'red'
    } else {
        yearErr.style.display = 'none';
        yearInput.style.borderColor = '';
        document.querySelector("[for='year']").style.color = ''
    }

});


// calculate age in years, months and days
