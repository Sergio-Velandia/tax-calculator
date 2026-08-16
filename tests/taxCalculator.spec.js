const calculateTax = require('../taxCalculator');

describe('Tax Calculator', function () {

  it('calcula correctamente el impuesto para el tramo más bajo (5%)', function () {
    expect(calculateTax(10000)).toEqual(500);
  });

  it('calcula correctamente el impuesto para el tramo medio (10%)', function () {
    expect(calculateTax(40000)).toEqual(3500);
  });

  it('calcula correctamente el impuesto para el tramo alto (20%)', function () {
    expect(calculateTax(50000)).toEqual(5500);
  });

  it('devuelve 0 cuando el ingreso es 0', function () {
    expect(calculateTax(0)).toEqual(0);
  });

  it('maneja ingresos negativos sin lanzar error', function () {
    expect(calculateTax(-100)).toBeLessThanOrEqual(0);
  });

});
