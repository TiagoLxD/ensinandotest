import { describe, expect, test } from "vitest";
import soma from "../soma";

describe("Soma", () => {
	test("Deve somar 1 + 1 = 2", () => {
		expect(soma(1, 2)).toBe(3);
	});

	test.each([
		[1, 1, 2],
		[1, 2, 3],
		[2, 1, 3],
	])('add(%i, %i) -> %i', (a, b, expected) => {
		expect(a + b).toBe(expected)
	})
});
