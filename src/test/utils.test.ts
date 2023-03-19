import { toUpperCase } from "../app/utils";

describe("Utils test suite", () => {
  test("Should return uppercase", () => {
    const result = toUpperCase("teststring");
    expect(result).toBe("TESTSTRING");
  });
});
