document.getElementById("click-button").addEventListener("click", function(e) {
  //hide results initially
  document.querySelector(".results").style.display = "none";
  //show results after clicking
  setTimeout(calculateInput, 1000);

  e.preventDefault();
});

function calculateInput() {
  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  //monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);
  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);
    document.querySelector(".results").style.display = "block";
  } else {
    showError("PLEASE CHECK YOUR INPUTS!!");
  }
}

function showError(err) {
  const container = document.querySelector(".container");
  const heading = document.querySelector(".heading");

  const errDiv = document.createElement("div");
  errDiv.className = "input-alert";
  errDiv.style.backgroundColor = "white";
  errDiv.style.color = "red";
  errDiv.appendChild(document.createTextNode(err));

  container.insertBefore(errDiv, heading);
  setTimeout(function clearError() {
    document.querySelector(".input-alert").remove();
  }, 2500);
}
