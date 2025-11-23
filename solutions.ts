type InputFormat = (
  input: number | string | boolean
) => number | string | boolean;

const formatValue: InputFormat = (input) => {
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

type InputLength = (inputLength: string | any[]) => number;

const getLength: InputFormat = (inputLength) => {
  if (typeof inputLength === "string") {
    return inputLength.length;
  } else if (Array.isArray(inputLength)) {
    return inputLength.length;
  } else {
    return "Invalid type!!!!";
  }
};

