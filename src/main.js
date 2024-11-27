import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

function resultsToggle() {
    resultsScreen = document.querySelector(".results");
    emptyScreen = document.querySelector(".empty");
    if (resultsScreen.classList.contains("hidden")) {
        resultsScreen.classList.remove("hidden");
        resultsScreen.classList.add("block");
        emptyScreen.classList.remove("block");
        emptyScreen.classList.add("hidden");
    } else {
        resultsScreen.classList.remove("block");
        resultsScreen.classList.add("hidden");
        emptyScreen.classList.remove("hidden");
        emptyScreen.classList.add("block");
    }
}
function calculateMortgage() {
    const principal = parseFloat(document.querySelector(".mortgage").value);
    const interestRate = parseFloat(document.querySelector(".rate").value) / 100;
    const years = parseInt(document.querySelector(".term").value);
    const mortgageType = document.querySelector(".mortgage-type").value;

    let monthlyPayment = 0;

    resultsToggle();

    if (checkbox1.checked) {
        const monthlyInterestRate = interestRate / 12;
        const totalPayments = years * 12;

        monthlyPayment = (principal * monthlyInterestRate * Math.pow((1 + monthlyInterestRate), totalPayments)) / 
                         (Math.pow((1 + monthlyInterestRate), totalPayments) - 1);

    } else if (checkbox2.checked) {
        monthlyPayment = (principal * interestRate) / 12;
    }

    document.getElementById('result').innerText = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
}

// Get the checkbox and the span element inside the custom checkbox
const checkbox1 = document.getElementById('repayment');
const circleIndicator1 = document.getElementById('circle1');
const sec1 = document.getElementById('r-option');
const checkbox2 = document.getElementById('interest');
const circleIndicator2 = document.getElementById('circle2');
const sec2 = document.getElementById('i-option');
const circleBorder1 = document.querySelector('.circbor1');
const circleBorder2 = document.querySelector('.circbor2');

// Add an event listener for changes to the checkbox1
checkbox1.addEventListener('change', function() {
  // Check if the checkbox1 is checked
  if (checkbox1.checked) {
    // Apply a background color when checked
    circleIndicator1.classList.remove('bg-transparent');
    circleIndicator1.classList.add('bg-lime'); // Change this color as needed
    sec1.classList.add('outline-lime');
    sec1.classList.remove('outline-slate-500');
    circleBorder1.classList.add('border-lime');
    circleBorder1.classList.remove('border-slate-500');
  } else {
    // Remove the background color when unchecked
    circleIndicator1.classList.remove('bg-lime');
    circleIndicator1.classList.add('bg-transparent');
    sec1.classList.remove('outline-lime');
    sec1.classList.add('outline-slate-500');
    circleBorder1.classList.remove('border-lime');
    circleBorder1.classList.add('border-slate-500');
  }
})

checkbox2.addEventListener('change', function() {
    // Check if the checkbox2 is checked
    if (checkbox2.checked) {
      // Apply a background color when checked
      circleIndicator2.classList.remove('bg-transparent');
      circleIndicator2.classList.add('bg-lime'); // Change this color as needed
      sec2.classList.add('outline-lime');
      sec2.classList.remove('outline-slate-500');
      circleBorder2.classList.add('border-lime');
      circleBorder2.classList.remove('border-slate-500');
    } else {
      // Remove the background color when unchecked
      circleIndicator2.classList.remove('bg-lime');
      circleIndicator2.classList.add('bg-transparent');
      sec2.classList.remove('outline-lime');
      sec2.classList.add('outline-slate-500');
      circleBorder2.classList.remove('border-lime');
      circleBorder2.classList.add('border-slate-500');
    }
  })