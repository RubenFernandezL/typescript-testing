import { getStringInfo, StringInfo, toUpperCase } from "../app/utils";

let sut = undefined; //sut it's from System Under Test
let actual: StringInfo | undefined = undefined;

describe("Utils test suite", () => {
  beforeEach(() => {
    sut = toUpperCase;
  });
  it("Should return uppercase of valid string", () => {
    //Arrange
    const expected = "TESTSTRING";

    //Act
    actual = sut("teststring");

    //Assert
    expect(actual).toBe(expected);
  });
});

describe("getStringInfo for arg My-String", () => {
  beforeEach(() => {
    sut = getStringInfo;
    actual = sut("My-String");
  });
  it("Should return correct lowerCase", () => {
    expect(actual.lowerCase).toBe("my-string");
  });
  it("Should return correct upperCase", () => {
    expect(actual.upperCase).toBe("MY-STRING");
  });

  it("Should return correct characters length", () => {
    expect(actual.characters).toHaveLength(9);
    expect(actual.length).toBe(9);
  });

  it("Should return correct characters", () => {
    expect(actual.characters).toEqual([
      "M",
      `y`,
      `-`,
      `S`,
      `t`,
      "r",
      `i`,
      `n`,
      "g",
    ]);
  });

  it("Should return correct extrainfo", () => {
    expect(actual.extraInfo).toEqual({});
  });

  it("Should return extrainfo defined", () => {
    expect(actual.extraInfo).toBeDefined();
  });
});

describe("Parametrized tests", () => {
  it.each([
    { input: "abc", expected: "ABC" },
    { input: "def", expected: "DEF" },
    { input: "ghi", expected: "GHI" },
  ])("$input toUppercase should be $expected", ({ input, expected }) => {
    const actual = toUpperCase(input);

    expect(actual).toBe(expected);
  });
});
