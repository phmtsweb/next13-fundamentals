import { Product } from '@/components/product'
import { apiProducts } from '@/data/apiProducts'
import { Metadata } from 'next'
import { Product as ProductProps } from '@/data/types/products'

async function getProduct(slug: string): Promise<ProductProps> {
  const response = await apiProducts(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60,
    },
  })

  const { product } = await response.json()

  return product
}

type ProductPageProps = {
  params: {
    slug: string
  }
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const product = await getProduct(params.slug)

  return {
    title: product.title,
    description: product.description,
  }
}

export async function generateStaticParams() {
  const response = await apiProducts('/products/featured')

  const products = (await response.json()) as ProductProps[]
  return products.map((product) => {
    return {
      slug: product.slug,
    }
  })
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.slug)
  return <Product product={product} />
}
