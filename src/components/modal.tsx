import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

export function Modal({ children }: { children: React.ReactNode }) {
  return (
    <Dialog.Root defaultOpen modal open>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-zinc-800 p-4 shadow-lg">
          {children}
          <Dialog.Close asChild>
            <button className="bg-transparent p-2 hover:bg-white/10">
              <X className="h-4 w-4 text-zinc-400" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
