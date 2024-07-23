import { ArrowRight, Calendar, MapPin, Settings2 } from 'lucide-react'

import { Button } from '../../../components/button'

interface DestinationAndDateProps {
  isGuestInputOpen: boolean
  closeGuestsInput: () => void
  openGuestsInput: () => void
}

export function DestinationAndDate({
  closeGuestsInput,
  isGuestInputOpen,
  openGuestsInput,
}: DestinationAndDateProps) {
  return (
    <div className="flex h-16 items-center gap-3 rounded-s-xl bg-zinc-900 px-4 shadow-shape">
      <div className="flex flex-1 items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <input
          disabled={isGuestInputOpen}
          className="text-large flex-1 bg-transparent placeholder-zinc-400 outline-none"
          type="text"
          placeholder="Para onde você vai?"
        />
      </div>
      <div className="flex items-center gap-2">
        <Calendar className="size-5 text-zinc-400" />
        <input
          disabled={isGuestInputOpen}
          className="text-large w-36 bg-transparent placeholder-zinc-400 outline-none"
          type="text"
          placeholder="Quando?"
        />
      </div>

      <div className="h-6 w-px bg-zinc-800" />

      {isGuestInputOpen ? (
        <Button variant="secondary" onClick={closeGuestsInput}>
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button onClick={openGuestsInput}>
          Continuar
          <ArrowRight className="size-5" />
        </Button>
      )}
    </div>
  )
}
