
export const flatten = (arr: any): any[] => { 
  if (typeof arr === 'undefined') return []
  return Array.isArray(arr) ? arr.flat(1) : [arr];
}

export const flattenDeep = (arr: any): any[] => { 
  if (typeof arr === 'undefined') return []
  return Array.isArray(arr) ? arr.flat(Infinity) : [arr];
}
