import { ArrowRight, MapPin, Settings2 } from 'lucide-react'
import { useState } from 'react'
import { DateRange } from 'react-day-picker'

import { DateRangePicker } from '@/components/ui/date-range-picker'

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
  const [date, setDate] = useState<DateRange | undefined>()

  return (
    <div className="shadow-shape flex h-16 items-center gap-3 rounded-s-xl bg-zinc-900 px-4">
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
        <DateRangePicker setDate={setDate} date={date} />
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
