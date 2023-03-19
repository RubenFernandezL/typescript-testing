import { getStringInfo, toUpperCase } from "../app/utils";

describe("Utils test suite", () => {
  it("Should return uppercase of valid string", () => {
    //Arrange
    const sut = toUpperCase; //sut it's from System Under Test
    const expected = "TESTSTRING";

    //Act
    const actual = sut("teststring");

    //Assert
    expect(actual).toBe(expected);
  });

  it("Should return info of valid string", () => {
    const sut = getStringInfo;

    const actual = sut("My-String");

    expect(actual.lowerCase).toBe("my-string");
    expect(actual.upperCase).toBe("MY-STRING");
    expect(actual.characters).toHaveLength(9);
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
    expect(actual.length).toBe(9);
    expect(actual.extraInfo).toEqual({});
  });
});
