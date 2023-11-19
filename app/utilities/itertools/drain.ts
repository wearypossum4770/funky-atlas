const drainer = (arr: any, predicate: Set<number>) =>
  arr.reduce(
    (a: any[], c: any, i: number) => (predicate.has(i) ? a : [...a, c]),
    Array<any>(),
  );

  /**
   * @description Removes the specified range from the vector in bulk.
   * @param arr - an array/list of values.
   * @param keys - an ordered/unordered list of indexes to remove.
   * @returns 
   */
export const drain = (arr: any[], keys: any[]) => drainer(arr, new Set(keys));
