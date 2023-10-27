'use client'

import { useCart } from '@/contexts/cart-context'
import { Product } from '@/data/types/products'

type AddToCartButtonProps = {
  product: Product
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart()
  return (
    <button
      type="button"
      onClick={() => addToCart(product)}
      className="flex-center mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 text-lg font-semibold text-white hover:bg-emerald-500"
    >
      Adicionar ao carrinho
    </button>
  )
}
