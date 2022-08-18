import calculator from "../files/calculator";

describe("calculadora", () => {
  it("Add 1 to 2 should return 3", () => {
    var resultado = calculator.add(1, 2);
    expect(resultado).toBe(3);
  });

  it("Subtract 2 from 10 should return 8", () => {
    var resultado = calculator.subtract(10, 2);
    expect(resultado).toBe(8);
  });

  it("Multiply  2 with 8 should return 16", () => {
    var resultado = calculator.multiply(2, 8);
    expect(resultado).toBe(16);
  });

  it("Multiply should be idempotent", () => {
    var resultado = calculator.multiply(8, 2);
    expect(resultado).toBe(calculator.multiply(2, 8));
  });

  it("Divide 8 with 2 should return 4", () => {
    var resultado = calculator.divide(8, 2);
    expect(resultado).toBe(4);
  });
});
