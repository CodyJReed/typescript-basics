const add = (a: number, b: number): number => {
  return a + b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = (a: number, b: number): number => a * b;

const logger = (a: string): void => console.log(a);

const throwError = (a: string): string => {
  if (!a) {
    throw new Error(a);
  }

  return a;
};
