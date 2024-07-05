import half from "../src/half.js";

test("half", () => {
  expect(half(6)).toBe(3);
  expect(half(0).toBe(-1));
});
