const fizzbuzz = require("./fizzbuzz");

describe("test fizzbuzz", () => {
  test("test 1 expect 1", () => {
    const result = fizzbuzz.say(1);
    expect(result).toEqual(1); //assert function
  });
});

//npm install -g jest
