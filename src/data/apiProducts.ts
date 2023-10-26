import { env } from '@/env'
import { createApi } from '@/lib/api'

export const apiProducts = createApi({
  baseURL: env.NEXT_PUBLIC_API_PRODUCTS_URL,
  apiPrefix: env.NEXT_PUBLIC_API_PRODUCTS_API_PREFIX,
})
