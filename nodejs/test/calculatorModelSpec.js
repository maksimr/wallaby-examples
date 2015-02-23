var Calculator = require('../src/calculatorModel').Calculator;
var expect = require('expect');

describe('calculatorModelSpec', function() {
  var calculator;

  beforeEach(function() {
    calculator = new Calculator();
  });

  it('should add two numbers', function() {
    expect(calculator.add(2, 1)).toEqual(3);
  });

  it('should multiply two numbers', function() {
    expect(calculator.multiply(2, 2)).toEqual(4);
  });

  it('should subtract two numbers', function() {
    expect(calculator.subtract(2, 1)).toEqual(1);
  });

  it('should divide two numbers', function() {
    expect(calculator.divide(4, 2)).toEqual(2);
  });
});
