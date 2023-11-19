import { describe, expect, test } from "bun:test";
import { flatten, flattenDeep } from "~/utilities/itertools/flatten";

describe("Shallow flatten method", () => {
  test.each([
    [
      [
        [1, 2, 3],
        [
          [4, 5, 6],
          [7, 8, 9],
        ],
      ],
      [1, 2, 3, [4, 5, 6], [7, 8, 9]],
    ],
    [["hello", [[["world1", "world2", ["marco"]]]], ["polo", ["monster"]]], ["hello", [["world1", "world2", ["marco"]]], "polo", ["monster"]],],
  ])("\n\tGiven %o\n\t\tWhen shallow flattened one level\n\t\tThen the resulting array should be %o", (self: any[], output: any[]) => {
    const result = flatten(self);
    expect(result).toStrictEqual(output);
  });
});

describe('Deep flatten method', () => {
   test.each([
    [
      [
        [1, 2, 3],
        [
          [4, 5, 6],
          [7, 8, 9],
        ],
      ],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
    ],
    [["hello", [[["world1", "world2", ["marco"]]]], ["polo", ["monster"]]], ["hello", "world1", "world2", "marco", "polo", "monster"],],
  ])("\n\tGiven %o\n\t\tWhen flattend deeply\n\t\tThen the resulting array should be %o", (self: any[], output: any[]) => {
    const result = flattenDeep(self);
    expect(result).toStrictEqual(output)
  })
})