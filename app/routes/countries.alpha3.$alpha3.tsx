import type { LoaderFunctionArgs } from "@remix-run/node"; // or cloudflare/deno
import { json } from "@remix-run/node"; // or cloudflare/deno
import { getCountryByAlpha3 } from '~/models/country.server'

export const loader = async ({ params }: LoaderFunctionArgs) => json(await getCountryByAlpha3 (params))

export const action = async () => json({ ok: true })