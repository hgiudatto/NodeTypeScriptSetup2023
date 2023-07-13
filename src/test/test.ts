
import {
  Calculator,
  NullishVerifier,
  DoublePipeVerifier,
  MscVerifier,
  somePromise,
} from "../Calculator";

describe("Calculator", () => {
  it("should add two numbers correctly", () => {
    const result = Calculator.add(2, 3);
    expect(result).toBe(5);
  });

  it("should subtract two numbers correctly", () => {
    const result = Calculator.subtract(5, 3);
    expect(result).toBe(2);
  });
});

describe("NullishVerifier", () => {
  it("should return the fruit passed as parameter", () => {
    const result = NullishVerifier.verifyFruit("apple");
    expect(result).toBe("apple");
  });
});

describe("DoublePipeVerifier", () => {
  const fruit: string = "";
  it("should return blank as the fruit passed as parameter is blank", () => {
    const result = DoublePipeVerifier.verifyPipe(fruit);
    expect(result).toBe("");
  });
});

describe("MscVerifier", () => {
  it("should return 2023 as the prefix passed as parameter is 20 and the suffix is 23", () => {
    let py: string = "20";
    let sy: number = 23;
    const result = MscVerifier.doSomeConcats(py, sy);
    expect(result).toBe("2023");
  });
});

test("the data is Done", async () => {
  const data = await somePromise();
  expect(data).toBe("Done");
});


