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

<<<<<<< HEAD
  it('calcula correctamente justo en el límite de 10000', function () {
    expect(calculateTax(10000)).toEqual(500);
  });

  it('calcula correctamente para un ingreso muy alto', function () {
    expect(calculateTax(100000)).toEqual(15500);
  });

=======
>>>>>>> d1e8da70cd7f43fd142c38ae2500ec37c37edb89
});
