import { Product } from '@/data/types/products'
import Image from 'next/image'
import { AddToCartButton } from './add-to-cart-button'

export function Product({ product }: { product: Product }) {
  return (
    <main className="relative grid max-h-[868px] grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image
          src={product.image}
          alt={product.description}
          width={1000}
          height={1000}
          quality={100}
        />
      </div>
      <aside className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">{product.title}</h1>
        <p className="mt-2 leading-relaxed text-zinc-400">
          {product.description}
        </p>
        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
            {product.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
            })}
          </span>
          <span className="text-sm text-zinc-400">
            Em 10x sem juros de{' '}
            {(product.price / 10).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </div>
        <div className="mt-8 space-y-4">
          <span className="block-font-semibold">
            <div className="flex gap-2">
              <button
                type="button"
                className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-800 bg-zinc-700 text-sm font-semibold hover:bg-zinc-600"
              >
                P
              </button>
              <button
                type="button"
                className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-800 bg-zinc-700 text-sm font-semibold hover:bg-zinc-600"
              >
                M
              </button>
              <button
                type="button"
                className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-800 bg-zinc-700 text-sm font-semibold hover:bg-zinc-600"
              >
                G
              </button>
              <button
                type="button"
                className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-800 bg-zinc-700 text-sm font-semibold hover:bg-zinc-600"
              >
                GG
              </button>
            </div>
          </span>
        </div>

        <AddToCartButton product={product} />
      </aside>
    </main>
  )
}
