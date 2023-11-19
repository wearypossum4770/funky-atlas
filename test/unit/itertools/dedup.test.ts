import { dedup } from '~/utilities/itertools/dedup'
import { describe, test, expect } from 'bun:test'

describe('Dedup (deduplication) method', () => {
    test.each([
        [[1, 2, 2, 3, 2], [1,2,3]],
        [[1, 2, 3], [1, 2, 3]],
        [["foo", "bar", "Bar", "baz", "bar"], ['foo', 'bar', 'Bar', 'baz']]
    ])("\n\tGiven %o\n\t\tWhen deduplicated\n\t\tThen the resulting array should be %o", (self:any[], output: any[]) => {
        const result = dedup(self)
        expect(result).toStrictEqual(output)
    })
})
