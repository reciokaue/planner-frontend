import { ArrowRight, Calendar, MapPin, Settings2 } from 'lucide-react'

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
        <button
          onClick={closeGuestsInput}
          className="flex items-center gap-2 rounded-lg bg-zinc-800 px-5 py-2 font-medium text-zinc-200 hover:bg-zinc-700"
        >
          Alterar local/data
          <Settings2 className="size-5" />
        </button>
      ) : (
        <button
          onClick={openGuestsInput}
          className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400"
        >
          Continuar
          <ArrowRight className="size-5" />
        </button>
      )}
    </div>
  )
}
