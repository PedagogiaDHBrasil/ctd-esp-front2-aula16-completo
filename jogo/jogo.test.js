const jogo = require("./jogo");

describe("Obter jogo", () => {
  it("Deve retornar o jogo com o id fornecido", () => {
    const resultado = jogo.getJogo(1);

    expect(resultado).toEqual({
      id: 1,
      valor: 10,
    });
  });
});
