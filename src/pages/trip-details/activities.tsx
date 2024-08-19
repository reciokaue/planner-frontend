import { useQuery } from '@tanstack/react-query'
import { format } from 'date-fns'
import { CircleCheck } from 'lucide-react'
import { useParams } from 'react-router-dom'

import { getActivities } from '@/api/get-activities'
import { Skeleton } from '@/components/ui/skeleton'

export function Activities() {
  const { tripId } = useParams()

  const { data: activities, isLoading } = useQuery({
    queryKey: ['activities', tripId],
    queryFn: () => getActivities(tripId || ''),
  })

  return (
    <div className="space-y-8">
      {isLoading ? (
        [1, 2, 3].map((i) => (
          <div className="space-y-2.5" key={i}>
            <Skeleton className="h-6 w-28" />
            <Skeleton className="h-11 w-full" />
            <Skeleton className="" />
          </div>
        ))
      ) : activities ? (
        activities.map((day) => (
          <div key={day.date} className="space-y-2.5">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-semibold text-zinc-300">
                Dia {format(new Date(day.date), 'd')}
              </span>
              <span className="text-xs text-zinc-500">
                {format(new Date(day.date), 'EEEE')}
              </span>
            </div>
            <div className="space-y-2.5">
              {day.activities.length > 0 ? (
                day.activities.map((activity) => (
                  <div
                    key={activity.id}
                    className="shadow-shape flex items-center gap-3 rounded-xl bg-zinc-900 px-4 py-2.5"
                  >
                    <CircleCheck className="size-5 text-lime-300" />
                    <span className="text-zinc-100">{activity.title}</span>
                    <span className="ml-auto text-sm text-zinc-400">
                      {format(new Date(activity.occurs_at), 'HH:mm')}h
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-zinc-500">
                  Nenhuma atividade cadastrada nessa data.
                </p>
              )}
            </div>
          </div>
        ))
      ) : (
        <p className="text-sm text-zinc-500">Nenhuma atividade cadastrada</p>
      )}
    </div>
  )
}
