function calculateTax(income) {
  let tax = 0;

  if (income <= 10000) {
    tax = income * 0.05;
  } else if (income <= 40000) {
    tax = 10000 * 0.05 + (income - 10000) * 0.10;
  } else {
    tax = 10000 * 0.05 + 30000 * 0.10 + (income - 40000) * 0.20;
  }

  return parseFloat(tax.toFixed(2));
}

<<<<<<< HEAD
if (typeof module !== 'undefined' && module.exports) {
  module.exports = calculateTax;
}
=======
module.exports = calculateTax;
>>>>>>> d1e8da70cd7f43fd142c38ae2500ec37c37edb89
