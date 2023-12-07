import type { LoaderFunctionArgs } from "@remix-run/node"; // or cloudflare/deno
import { json } from "@remix-run/node"; // or cloudflare/deno
import { getCountryByShortCode } from '~/models/country.server'

export const loader = async ({ params }: LoaderFunctionArgs) => json(await getCountryByShortCode (params))

export const action = async () => json({ ok: true })