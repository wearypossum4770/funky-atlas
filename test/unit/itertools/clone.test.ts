import { cloneDeep } from '~/utilities/itertools/clone'
import { test, describe, expect }  from 'bun:test'

describe("Built-in Structured Clone", () => {
    test("Do not test built in methods/api's", ()=> {
        const clone = cloneDeep(true)
        expect(clone).toBe(true)
    })
})
