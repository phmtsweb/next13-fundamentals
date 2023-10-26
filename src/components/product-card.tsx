import { Product } from '@/data/types/products'
import Link from 'next/link'
import Image from 'next/image'
import { tv, VariantProps } from 'tailwind-variants'

const productCard = tv({
  slots: {
    container:
      'group relative flex items-end justify-center overflow-hidden rounded-lg bg-zinc-800',
    price:
      'absolute flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5',
  },
  variants: {
    type: {
      highlighted: {
        container: 'col-span-6 row-span-6',
        price: 'bottom-28 right-28',
      },
      normal: {
        container: 'col-span-3 row-span-3',
        price: 'bottom-10 right-10',
      },
    },
  },
  defaultVariants: {
    type: 'normal',
  },
})

type ProductCardProps = {
  product: Product
} & VariantProps<typeof productCard>

export function ProductCard({ product, type }: ProductCardProps) {
  const { container, price } = productCard({ type })
  return (
    <Link href={`/products/${product.slug}`} className={container()}>
      <Image
        className="transition-transform duration-500 ease-in-out group-hover:scale-105"
        src={product.image}
        width={920}
        height={920}
        quality={100}
        alt={product.description}
      />

      <div className={price()}>
        <span className="truncate text-sm">{product.title}</span>
        <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
          {product.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 0,
          })}
        </span>
      </div>
    </Link>
  )
}
