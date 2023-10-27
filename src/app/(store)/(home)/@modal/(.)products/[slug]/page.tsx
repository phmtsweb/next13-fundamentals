// import { Modal } from '@/components/modal'
import { Product } from '@/components/product'
import { apiProducts } from '@/data/apiProducts'
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

export default async function ProductPageModal({ params }: ProductPageProps) {
  const product = await getProduct(params.slug)
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/5">
      <h1 className="text-bold text-3xl text-white">Modal camisa</h1>
    </div>
  )
}
