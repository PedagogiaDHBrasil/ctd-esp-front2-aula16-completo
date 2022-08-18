import game from "../files/game";

describe("game", () => {
  it("Add 1 to 2 should return 3", () => {
    var resultado = game("Monkey Island");
    expect(resultado).toEqual({
      id: 1,
      name: "Monkey Island",
      description: "First game",
    });
  });
});
