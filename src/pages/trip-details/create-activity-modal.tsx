import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Tag, X } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { useParams } from 'react-router-dom'

import { addActivity } from '@/api/add-activity'
import { getTrip } from '@/api/get-trip'
import { DatePicker } from '@/components/ui/date-picker'
import { Skeleton } from '@/components/ui/skeleton'

import { Button } from '../../components/button'

interface CreateActivityModalProps {
  closeActivityModal: () => void
}

export function CreateActivityModal({
  closeActivityModal,
}: CreateActivityModalProps) {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState<Date | undefined>()

  const queryClient = useQueryClient()
  const { tripId } = useParams()

  const activityMutation = useMutation({
    mutationFn: addActivity,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['activities', tripId] })
    },
  })
  const { data: trip } = useQuery({
    queryKey: ['trip', tripId],
    queryFn: () => getTrip(tripId || ''),
  })

  async function createNewActivity(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!title || !date || !tripId) return

    const activity = {
      title,
      occurs_at: date,
      tripId,
    }

    await activityMutation.mutateAsync(activity)

    setDate(undefined)
    setTitle('')
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="shadow-shape z-10 w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
          <button onClick={closeActivityModal}>
            <X className="size-5 text-zinc-400" />
          </button>
        </div>
        <p className="text-sm text-zinc-400">
          Todos convidados podem visualizar as atividades.
        </p>
        <form onSubmit={createNewActivity}>
          <div className="mb-3 flex flex-col gap-2">
            {trip ? (
              <>
                <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 p-4">
                  <Tag className="ml-2 size-5 text-zinc-400" />
                  <input
                    className="text-large flex-1 bg-transparent placeholder-zinc-400 outline-none"
                    placeholder="Qual a atividade?"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <DatePicker
                  setDate={setDate}
                  date={date}
                  from={new Date(trip?.starts_at)}
                  to={new Date(trip?.ends_at)}
                />
              </>
            ) : (
              <>
                <Skeleton className="h-14 w-full" />
                <Skeleton className="h-14 w-full" />
              </>
            )}
          </div>
          <Button
            variant="primary"
            size="full"
            type="submit"
            loading={activityMutation.isPending}
          >
            Salvar atividade
          </Button>
        </form>
      </div>
    </div>
  )
}
