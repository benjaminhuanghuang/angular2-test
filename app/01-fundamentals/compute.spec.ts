import { compute } from "./compute";
describe("compute", () => {
  it("should return 0 if input it is negative", () => {
    const result = compute(-1);
    expect(result).toBe(0);
  });

  it("should increment the input it positive", () => {
    const result = compute(1);
    expect(result).toBe(2);
  });
}); // suit
