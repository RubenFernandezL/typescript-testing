import { toUpperCase } from "../app/utils";

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
});
