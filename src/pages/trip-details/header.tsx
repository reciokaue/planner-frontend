import { Calendar, MapPin, Settings2 } from 'lucide-react'

import { Button } from '../../components/button'

// interface HeaderProps {}

export function Header() {
  return (
    <div className="flex h-16 items-center justify-between rounded-xl bg-zinc-900 px-4 shadow-shape">
      <div className="flex items-center gap-2 text-lg text-zinc-100">
        <MapPin className="size-5 text-zinc-400" /> Florianópolis, Brasil
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2 text-lg text-zinc-100">
          <Calendar className="size-5 text-zinc-400" /> 17 a 23 de agosto
        </div>
        <div className="h-6 w-px bg-zinc-800" />

        <Button variant="secondary">
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      </div>
    </div>
  )
}
