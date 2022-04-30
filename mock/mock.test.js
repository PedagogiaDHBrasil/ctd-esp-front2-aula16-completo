const mock = require("./mock");

describe("Jest mock", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Função mock", () => {
    mock.foo = jest.fn().mockReturnValue("bar");
    expect(mock.foo()).toBe("bar");
  });

  it("Função original (irá retorna erro)", () => {
    expect(mock.foo()).toBe("foo");
  });
});
