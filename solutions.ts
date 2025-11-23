type Input = (input: number | string | boolean) => number | string | boolean;

const formatValue: Input = (input) => {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else if (typeof input === "boolean") {
    return !input;
  } else {
    return "Please give the correct input!!";
  }
};
