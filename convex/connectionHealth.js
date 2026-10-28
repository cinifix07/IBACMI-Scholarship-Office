import { query } from './_generated/server'

// Public connectivity probe: no account details, data, environment values, or credentials.
export const check = query({ args: {}, handler: async () => ({ ok: true }) })
