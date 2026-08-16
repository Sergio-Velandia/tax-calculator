function handleCalculate() {
  const income = parseFloat(document.getElementById('income').value);
  const tax = calculateTax(income);
  document.getElementById('result').innerText = 'Impuesto a pagar: $' + tax;
}
