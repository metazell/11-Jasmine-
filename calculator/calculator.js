window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupInitialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});


function getCurrentUIValues(){
  return{
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
};

function setupInitialValues() {
  const defaultValues = {amount: 425000, years: 30, rate: 2.5};
  const {amount, years, rate} = defaultValues;

  document.getElementById('loan-amount').value = amount;
  document.getElementById('loan-years').value = years;
  document.getElementById('loan-rate').value = rate;
  update();
}

function calculateMonthlyPayment(values) {
  const monthlyRate = (values.rate / 100) / 12;
  const numberOfPayments = Math.floor(values.years * 12);
  return (monthlyRate * values.amount) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
}

function update() {
  const currentUIValues = getCurrentUIValues();
  const monthlyPayment = calculateMonthlyPayment(currentUIValues);
  updateMonthly(monthlyPayment);
}

function updateMonthly(monthly) {
  const monthlyUI = document.getElementById('monthly-payment');
  monthlyUI.innerText = `$${monthly.toFixed(2)}`;
}
