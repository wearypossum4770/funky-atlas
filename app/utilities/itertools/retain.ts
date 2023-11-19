import { dedupSet } from "~/utilities/itertools/dedup";

const retainer = (arr: any[], predicate: Set<string>) =>
  arr.reduce((a, [k, v]) => (predicate.has(k) ? { ...a, [k]: v } : a), {});

export const retain = (arr: any[], keys: boolean[]) => arr.reduce((a,c, i) => keys[i] ? [...a, c]: a,[])

export const retainBykey = (obj: Record<string, any>, keys: any[]) =>
  retainer(Array.isArray(obj) ? obj : Object.entries(obj), dedupSet(keys));
