import { describe, expect, test } from "vitest";
import soma from "../soma";

describe("Soma", () => {
  test("Deve somar 1 + 1 = 2", () => {
    expect(soma(1, 2)).toBe(3);
  });
});
