export const Calculator = {
  add: (a: number, b: number) => a + b,
  subtract: (a: number, b: number) => a - b,
};

export const NullishVerifier = {
  verifyFruit: (fruit: string) => undefined ?? fruit,
};

export const DoublePipeVerifier = {
  verifyPipe: (fruit: string) => "" || fruit,
};

export const MscVerifier = {
  doSomeConcats: (prefixYear: string, suffixYear: number) =>
    prefixYear + suffixYear,
};

export const somePromise = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Done");
    }
  });
};
