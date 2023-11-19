import { retain, retainBykey } from '~/utilities/itertools/retain'
import { deepEqual } from '~/utilities/functools/deep-equal'
import { describe, test, expect } from 'bun:test'

describe('Retain object by key', () => {
    test.each([
        [ {'1': 1, '2': 2, '3': 3, '4': 4}, ['4'], {'4': 4}],
        [ { foo: "bar", baz: "qux"}, ['baz', 'foo'], { foo: "bar", baz: "qux"}]
    ])('\n\tGiven %o\n\t\tWhen', (self: Record<string, any>, keys: any[], output: Record<string, any>) => {
        const result = retainBykey(self, keys)
        console.log(result, output)
        expect(deepEqual(result, output)).toBe(true)
    })
})

describe('Retain method', ()=> {
test.each([
    [[1, 2, 3, 4, 5], [false, true, true, false, true], [2,3,5]],
])('\n\tGiven %o\n\t\tWhen passed %o\n\t\tThen the returned array should be %o', (self: any[],predicate: boolean[], output: any[]) => {
    const result = retain(self, predicate)
    expect(result).toStrictEqual(output)

} )
})