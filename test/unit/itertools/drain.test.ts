import { drain } from "~/utilities/itertools/drain";
import { describe, expect, test } from "bun:test";

describe("Drain method", () => {
    test.each([
    [[1, 2, 3], [1, 2], [1]],
    [[1, 1, 2, 4, 8, 12, 16], [1], [1, 2, 4, 8, 12, 16]],
    [
      ["hello", "world1", "world2", "marco", "polo", "monster"],
      [2, 5],
      ["hello", "world1", "marco", "polo"],
    ],
  ])(
    "\n\tGiven a list of values %o\n\t\tWhen indices %o are removed \n\t\tThen returning array should yeild %o",
    (self: any[], range: number[], output: any[]) => {
      const result = drain(self, range);
      expect(result).toStrictEqual(output);
    },
  );
});
