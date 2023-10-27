import { Product } from '@/data/types/products'
import { ProductCard } from '@/components/product-card'
import { apiProducts } from '@/data/apiProducts'
import { Metadata } from 'next'

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await apiProducts('/products/featured', {
    // next: {
    //   revalidate: 60 * 60,
    // },
    cache: 'no-store',
  })
  const products = await response.json()

  console.log(products)

  return products
}

export const metadata: Metadata = {
  title: 'Home',
}

export default async function Home() {
  const products = await getFeaturedProducts()
  return (
    <section className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
          type={index === 0 ? 'highlighted' : 'normal'}
        />
      ))}
    </section>
  )
}
