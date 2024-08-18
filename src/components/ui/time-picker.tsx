'use client'

import { PopoverClose } from '@radix-ui/react-popover'
import {
  addMinutes,
  format,
  formatDate,
  getMinutes,
  setHours,
  setMinutes,
  subMinutes,
} from 'date-fns'
import { ChevronDown, ChevronUp, Clock } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'

interface TimePickerProps {
  setDate: (date: Date) => void
  date: Date
}

export function TimePicker({ setDate, date }: TimePickerProps) {
  function addHalfHour() {
    setDate(addMinutes(date, calcHour().add))
  }
  function subtractHalfHour() {
    setDate(subMinutes(date, calcHour().sub))
  }
  function calcHour() {
    const minutes = getMinutes(date)
    console.log(minutes)
    if (minutes === 0 || minutes === 30) return { add: 30, sub: 30 }

    const roundedTime = (Math.round(minutes / 30) * 30) % 60
    const difference = roundedTime - minutes

    return {
      add: difference > 0 ? difference : 60 + difference,
      sub: Math.abs(difference),
    }
  }

  function onChangeHour(hours: string) {
    setDate(setHours(date, +hours))
  }
  function onChangeMinutes(minutes: string) {
    setDate(setMinutes(date, +minutes))
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'flex flex-1 items-center justify-start gap-2 rounded-lg border border-zinc-800 bg-zinc-950 p-4',
            !date && 'text-muted-foreground',
          )}
        >
          <Clock className="ml-2 size-5 text-zinc-400" />
          {date ? format(date, 'HH:mm') : <span>Horário</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-6">
        <h1 className="mb-2 text-2xl">Selecionar horário</h1>
        <div className="flex justify-between">
          <div className="flex items-start justify-start">
            <div className="flex flex-col gap-2">
              <input
                type="number"
                max={24}
                min={0}
                onChange={(e) => onChangeHour(e.target.value)}
                className="w-24 rounded-md bg-zinc-700 px-5 py-2 text-center font-mono text-4xl font-semibold text-zinc-200 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                value={formatDate(date, 'HH')}
              />
              <h2 className="text-base text-zinc-300">Hora</h2>
            </div>
            <span className="px-1 align-top text-6xl leading-10 text-zinc-800">
              :
            </span>
            <div className="flex flex-col gap-1">
              <input
                type="number"
                max={24}
                min={0}
                onChange={(e) => onChangeMinutes(e.target.value)}
                value={formatDate(date, 'mm')}
                className="w-24 rounded-md bg-zinc-700 px-5 py-2 text-center font-mono text-4xl font-semibold text-zinc-200 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
              <h2 className="text-base text-zinc-300">Minuto</h2>
            </div>
          </div>
          <aside className="flex h-full flex-col gap-1 pl-2">
            <button
              onClick={addHalfHour}
              className="rounded border border-zinc-500 px-2 py-1 hover:bg-zinc-800"
            >
              <ChevronUp className="size-5" />
            </button>
            <button
              onClick={subtractHalfHour}
              className="rounded border border-zinc-500 px-2 py-1 hover:bg-zinc-800"
            >
              <ChevronDown className="size-5" />
            </button>
          </aside>
        </div>

        <PopoverClose asChild>
          <Button variant="secondary" className="mt-4 w-full">
            Salvar
          </Button>
        </PopoverClose>
      </PopoverContent>
    </Popover>
  )
}
