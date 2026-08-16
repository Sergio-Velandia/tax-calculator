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

if (typeof module !== 'undefined' && module.exports) {
  module.exports = calculateTax;
}
