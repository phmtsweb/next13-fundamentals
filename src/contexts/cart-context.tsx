'use client'

import { Product } from '@/data/types/products'
import React, { createContext, useCallback, useContext, useState } from 'react'

type CartItem = {
  id: number
  quantity: number
}

type CartContextProps = {
  items: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (id: number) => void
  size: () => number
}

const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = useCallback((product: Product) => {
    setCart((cart) => {
      const productIndex = cart.findIndex((item) => item.id === product.id)

      if (productIndex >= 0) {
        cart[productIndex].quantity += 1
        return [...cart]
      }
      return [...cart, { id: product.id, quantity: 1 }]
    })
  }, [])

  const removeFromCart = useCallback((id: number) => {
    setCart((cart) => {
      const productIndex = cart.findIndex((item) => item.id === id)

      if (productIndex >= 0) {
        cart.splice(productIndex, 1)
        return [...cart]
      }

      return [...cart]
    })
  }, [])

  const size = useCallback(() => {
    return cart.reduce((acc, item) => acc + item.quantity, 0)
  }, [cart])
  return (
    <CartContext.Provider
      value={{ items: cart, addToCart, removeFromCart, size }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
