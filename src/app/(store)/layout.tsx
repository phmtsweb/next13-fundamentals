import { Header } from '@/components/header'
import { CartProvider } from '@/contexts/cart-context'

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <CartProvider>
      <main className="mx-auto grid min-h-screen w-full max-w-[1200px] grid-rows-app gap-5 p-8">
        <Header />
        {children}
      </main>
    </CartProvider>
  )
}
