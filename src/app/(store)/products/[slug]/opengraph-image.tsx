/* eslint-disable @next/next/no-img-element */
import { apiProducts } from '@/data/apiProducts'
import { Product } from '@/data/types/products'
import { env } from '@/env'
import { ImageResponse } from 'next/server'
import colors from 'tailwindcss/colors'
export const runtime = 'edge'

export const alt = 'Product image'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function OgImage({
  params,
}: {
  params: { slug: string }
}) {
  const response = await apiProducts(`/products/${params.slug}`, {
    next: {
      revalidate: 60 * 60,
    },
  })
  const { product } = (await response.json()) as { product: Product }
  const imageUrl = new URL(product.image, env.APP_URL)
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: colors.zinc[950],
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <img
          src={imageUrl.toString()}
          alt={product.description}
          style={{ width: '100%' }}
        />
      </div>
    ),
  )
}
