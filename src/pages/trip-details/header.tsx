import { useQuery } from '@tanstack/react-query'
import { format } from 'date-fns'
import { Calendar, MapPin, Settings2 } from 'lucide-react'
import { useParams } from 'react-router-dom'

import { getTrip } from '@/api/get-trip'

import { Button } from '@/components/ui/button'

export function Header() {
  const { tripId } = useParams()

  const { data: trip } = useQuery({
    queryKey: ['trip', tripId],
    queryFn: () => getTrip(tripId || ''),
  })

  return (
    <div className="shadow-shape flex h-16 items-center justify-between rounded-xl bg-zinc-900 px-4">
      <div className="flex items-center gap-2 text-lg text-zinc-100">
        <MapPin className="size-5 text-zinc-400" /> {trip?.destination}
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2 text-lg text-zinc-100">
          <Calendar className="size-5 text-zinc-400" />
          {trip?.starts_at && trip.ends_at && (
            <>
              {format(new Date(trip?.starts_at), 'd LLL')}
              {' até '}
              {format(new Date(trip?.ends_at), "d' de 'LLL")}
            </>
          )}
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
