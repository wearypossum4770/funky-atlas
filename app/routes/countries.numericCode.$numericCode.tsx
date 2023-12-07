import type { LoaderFunctionArgs } from "@remix-run/node"; // or cloudflare/deno
import { json } from "@remix-run/node"; // or cloudflare/deno
import { getCountryByNumericCode } from '~/models/country.server'

export const loader = async ({ params }: LoaderFunctionArgs) => json(await getCountryByNumericCode (params))

export const action = async () => json({ ok: true })