// import the sum and multply functions from calculator.js
import { sum, multiply } from "./calculator.js";

// import my test functions from vitest
import { test, expect, describe } from "vitest";

// write the tests
describe("Sum Tests", function () {
  test("adds 1 & 2 to return 3", function () {
    expect(sum(1, 2)).toBe(3);
  });

  test("add 9 & 10 to return 19", function () {
    const result = sum(9, 10);
    const answer = 19;
    expect(result).toBe(answer);
  });
});

describe("Multiply Tests", function () {
  test("multiply 7 & 3 to return 21", function () {
    const result = multiply(7, 3);
    const answer = 21;
    expect(result).toBe(answer);
  });

  test("multiply 15 & 10 to return 150", function () {
    const result = multiply(15, 10);
    const answer = 150;
    expect(result).toBe(answer);
  });
});
