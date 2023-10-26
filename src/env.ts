import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_API_PRODUCTS_URL: z.string().url(),
  NEXT_PUBLIC_API_PRODUCTS_API_PREFIX: z.string().regex(/^\/.+/),
})

const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
  const errorMessage = {
    message: 'Invalid environment variables',
    details: parsedEnv.error.flatten().fieldErrors,
  }
  throw new Error(JSON.stringify(errorMessage, null, 2))
}

export const env = parsedEnv.data
