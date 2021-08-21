function add(a: number, b: number): number {
  return a + b;
}

test("sample test", () => {
  expect(add(2, 3)).toBe(5);
});
