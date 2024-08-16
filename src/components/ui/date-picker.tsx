'use client'

import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'

interface DatePickerProps {
  setDate: (date: Date | undefined) => void
  date: Date | undefined
  from?: Date
  to?: Date
}

export function DatePicker({ setDate, date, from, to }: DatePickerProps) {
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
          <CalendarIcon className="ml-2 size-5 text-zinc-400" />
          {date ? format(date, 'PPP') : <span>Data da atividade</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          fromDate={from}
          toDate={to}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
