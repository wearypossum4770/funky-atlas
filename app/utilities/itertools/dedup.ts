/**
 * @description Removes repeated elements in the array.
 * @param arr - an array of values.
 * @returns {}
 */
export const dedup = <T>(arr: T[]): T[] => [...dedupSet(arr)];

const dedupSet = <T>(arr: T[]): Set<T> => new Set(arr);
