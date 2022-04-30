const operacoes = require("./calculadora");

describe("Teste calculadora", () => {
  test("Adição 1 + 2 deve retornar 3", () => {
    var resultado = operacoes.add(1, 2);

    expect(resultado).toBe(3);
  });

  test("Subtração de 2 para 10 deve retornar 8", () => {
    var resultado = operacoes.sub(10, 2);

    expect(resultado).toBe(8);
  });

  test("Multiplicação de 2 para 8 deve retornar 16", () => {
    var resultado = operacoes.multi(2, 8);

    expect(resultado).toBe(16);
  });

  test("Divisão de 8 para 2 deve retornar 4", () => {
    var resultado = operacoes.div(8, 2);

    expect(resultado).toBe(4);
  });
});
