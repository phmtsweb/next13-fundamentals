import { z } from 'zod'
import data from '@/data/data.json'
import { NextRequest } from 'next/server'
import { delay } from '@/utils/delay'
import { Product } from '@/data/types/products'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const _query = z.string().safeParse(searchParams.get('q'))

  if (!_query.success) {
    return {
      products: [],
    }
  }

  const query = _query.data.toLowerCase().replace(/\s+/g, ' ')

  const products: Product[] = data.products.filter((product) => {
    const { title, description } = product
    return (
      title.toLowerCase().includes(query) ||
      description.toLowerCase().includes(query)
    )
  })

  await delay(100)
  return Response.json({ products })
}
