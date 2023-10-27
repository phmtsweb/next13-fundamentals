import { z } from 'zod'
import data from '@/data/data.json'
import { delay } from '@/utils/delay'

type GetParams = {
  params: {
    slug: string
  }
}

export async function GET(_: Request, { params }: GetParams) {
  const _slug = z.string().safeParse(params.slug)

  if (!_slug.success) {
    return Response.json(
      { error: _slug.error.flatten().fieldErrors },
      { status: 400 },
    )
  }

  const slug = _slug.data

  const product = data.products.find((product) => product.slug === slug)

  if (!product) {
    return Response.json(
      { error: `Product with slug "${slug}" not found` },
      { status: 404 },
    )
  }

  await delay(100)
  return Response.json({ product })
}
