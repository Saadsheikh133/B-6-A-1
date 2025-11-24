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

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

interface Item {
  title: string;
  rating: number;
}

const filterByRating = (items: Item[]): Item[] => {
  const filteredItems = items.filter((item) => item.rating >= 4);
  return filteredItems;
};

type Users = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (users: Users[]): Users[] => {
  const result = users.filter((user) => user.isActive === true);
  return result;
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book) => {
  const availability = book.isAvailable ? "Yes" : "No";
  const bookDetails = `Title: ${book.title}, Author: ${book.title}, Published: ${book.publishedYear}, Available: ${availability}`;
};

type GetUniqueValues = (
  arr1: (number | string)[],
  arr2: (number | string)[]
) => (number | string)[];

type Arr = (string | number)[];

const getUniqueValues: GetUniqueValues = (arr1, arr2) => {
  let uniqueArr: Arr = [];

  const contains = (arr: Arr, value: string | number):boolean => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        return true;
      }
    }
    return false;
  };

  for (let i = 0; i < arr1.length; i++) {
    if (!contains(uniqueArr, arr1[i])) {
      uniqueArr.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!contains(uniqueArr, arr2[i])) {
      uniqueArr.push(arr2[i]);
    }
  }

  return uniqueArr;
};

