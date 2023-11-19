export const flatten = (arr: any): any[] =>
  Array.isArray(arr) ? arr.flat(1) : [];
export const flattenDeep = (arr: any): any[] =>
  Array.isArray(arr) ? arr.flat(Infinity) : [arr];

// export const merge = () => null

const omit = () => null;
const omitBy = () => null;
