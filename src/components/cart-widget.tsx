'use client'

import { useCart } from '@/contexts/cart-context'
import { ShoppingBag } from 'lucide-react'

export function CartWidget() {
  const { size } = useCart()

  const length = size()
  return (
    <div className="flex items-center gap-2">
      <ShoppingBag className="h-5 w-5 text-white" />
      <span className="flex items-center justify-center rounded-full  text-xs text-white">
        Cart ({length > 9 ? '9+' : length})
      </span>
    </div>
  )
}
