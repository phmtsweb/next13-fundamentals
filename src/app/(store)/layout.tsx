import { Header } from '@/components/header'

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="mx-auto grid min-h-screen w-full max-w-[1200px] grid-rows-app gap-5 p-8">
      <Header />
      {children}
    </main>
  )
}
