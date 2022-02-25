const childProcess = require("child_process");

describe("Exercício cassino", () => {
  it("deveria imprimir o número da sorte", () => {
    const result = childProcess.execSync("node index.js");

    expect(result.toString().toLowerCase()).toEqual(
      expect.stringContaining("Seu número da sorte é".toLowerCase())
    );
  });

  it("deveria imprimir 'Jogando dados...'", () => {
    const result = childProcess.execSync("node index.js");

    expect(result.toString().toLowerCase()).toEqual(
      expect.stringContaining("Jogando dados...".toLowerCase())
    );
  });

  it("deveria imprimir 'primeiro dado...'", () => {
    const result = childProcess.execSync("node index.js");

    expect(result.toString().toLowerCase()).toEqual(
      expect.stringContaining("primeiro dado".toLowerCase())
    );
  });

  it("deveria imprimir 'segundo dado...'", () => {
    const result = childProcess.execSync("node index.js");

    expect(result.toString().toLowerCase()).toEqual(
      expect.stringContaining("segundo dado".toLowerCase())
    );
  });
});
