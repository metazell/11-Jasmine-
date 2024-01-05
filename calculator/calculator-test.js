it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 250000,
    years: 15,
    rate: 1.9
  };

  const calculatedMonthlyPayment = calculateMonthlyPayment(values);
  const expectedMonthlyPayment = '1597.29';

  expect(calculatedMonthlyPayment.toFixed(2)).toEqual(expectedMonthlyPayment);
});

it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 99900,
    years: 30,
    rate: 3.5
  };

  const calculatedMonthlyPayment = calculateMonthlyPayment(values);
  const expectedMonthlyPayment = '448.60';

  expect(calculatedMonthlyPayment.toFixed(2)).toEqual(expectedMonthlyPayment);
});




