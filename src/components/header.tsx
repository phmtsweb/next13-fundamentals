import { Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { CartWidget } from './cart-widget'

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devstore
        </Link>
        <form className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700">
          <Search className="h-5 w-5 text-zinc-500" />
          <input
            type="text"
            placeholder="Buscar produtos..."
            className="flex-1 bg-transparent text-white outline-none placeholder:text-zinc-500"
          />
        </form>
      </div>
      <div className="flex items-center gap-4">
        <CartWidget />
        <div className="h-4 w-px bg-zinc-700"></div>
        <Link
          href="/profile"
          className="flex items-center gap-2 hover:underline"
        >
          <span className="text-sm">Conta</span>
          <Image
            src="https://github.com/phmtsweb.png"
            className="h-6 w-6 rounded-full"
            width={24}
            height={20}
            alt="Profile image"
          />
        </Link>
      </div>
    </header>
  )
}
