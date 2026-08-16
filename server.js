const express = require('express');
const calculateTax = require('./taxCalculator');
const app = express();
app.use(express.json());
app.use(express.static(__dirname));

app.post('/calculate', (req, res) => {
  const income = parseFloat(req.body.income);
  const tax = calculateTax(income);
  res.json({ income, tax });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Tax Calculator corriendo en el puerto ${PORT}`));
