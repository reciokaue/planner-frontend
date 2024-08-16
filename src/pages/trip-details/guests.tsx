import { useQuery } from '@tanstack/react-query'
import { CircleCheck, CircleDashed, UserCog } from 'lucide-react'
import { useParams } from 'react-router-dom'

import { getTripParticipants } from '@/api/get-trip-participants'
import { Skeleton } from '@/components/ui/skeleton'

import { Button } from '../../components/button'

export function Guests() {
  const { tripId } = useParams()

  const { data: participants, isLoading } = useQuery({
    queryKey: ['participants', tripId],
    queryFn: () => getTripParticipants(tripId || ''),
  })

  return (
    <aside className="space-y-6">
      <h2 className="text-xl font-semibold">Convidados</h2>

      <div className="space-y-5">
        {participants
          ? participants.map((participant) => (
              <div
                key={participant.id}
                className="flex items-center justify-between gap-4"
              >
                <div className="space-y-1.5">
                  <h3 className="font-medium text-zinc-100">
                    {participant.name}
                  </h3>
                  <span className="block truncate text-sm text-zinc-400">
                    {participant.email}
                  </span>
                </div>
                {participant.is_confirmed ? (
                  <CircleCheck className="size-5 shrink-0 text-lime-300" />
                ) : (
                  <CircleDashed className="size-5 shrink-0 text-zinc-400" />
                )}
              </div>
            ))
          : isLoading &&
            [0, 1, 2].map((i) => (
              <div key={i}>
                <Skeleton className="mb-1.5 h-4 w-32" />
                <Skeleton className="h-7 w-full" />
              </div>
            ))}
      </div>

      <Button variant="secondary">
        <UserCog className="size-5" />
        Gerenciar convidados
      </Button>
    </aside>
  )
}
