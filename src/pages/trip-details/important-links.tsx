import { Link2, Plus } from 'lucide-react'

import { Button } from '../../components/button'

// interface ImportantLinksProps {}

export function ImportantLinks() {
  return (
    <header className="space-y-6">
      <h2 className="text-xl font-semibold">Links importantes</h2>

      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="5 space-y-1">
            <h3 className="font-medium text-zinc-100">Reserva do AirBnB</h3>
            <a
              href="#"
              className="block truncate text-xs text-zinc-400 hover:text-zinc-200"
            >
              https://www.airbnb.com.br/rooms/1047000113129389012380129
            </a>
          </div>
          <Link2 className="size-5 shrink-0 text-zinc-400" />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="5 space-y-1">
            <h3 className="font-medium text-zinc-100">Reserva do AirBnB</h3>
            <a
              href="#"
              className="block truncate text-xs text-zinc-400 hover:text-zinc-200"
            >
              https://www.airbnb.com.br/rooms/1047000113129389012380129
            </a>
          </div>
          <Link2 className="size-5 shrink-0 text-zinc-400" />
        </div>
      </div>

      <Button variant="secondary">
        <Plus className="size-5" />
        Cadastrar novo link
      </Button>
    </header>
  )
}
