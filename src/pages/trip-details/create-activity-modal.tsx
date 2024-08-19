import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Plus, Tag } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { useParams } from 'react-router-dom'

import { addActivity } from '@/api/add-activity'
import { getTrip } from '@/api/get-trip'
import { Button } from '@/components/ui/button'
import { DatePicker } from '@/components/ui/date-picker'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog'
import { TimePicker } from '@/components/ui/time-picker'

export function CreateActivityButton() {
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
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary">
          <Plus className="size-5" />
          Cadastrar atividade
        </Button>
      </DialogTrigger>
      <DialogContent className="shadow-shape w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5">
        <DialogHeader className="flex justify-between">
          <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
          <p className="text-sm text-zinc-400">
            Todos convidados podem visualizar as atividades.
          </p>
        </DialogHeader>
        <form onSubmit={createNewActivity}>
          <div className="mb-3 flex flex-col gap-2">
            <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 p-4">
              <Tag className="ml-2 size-5 text-zinc-400" />
              <input
                className="text-large flex-1 bg-transparent placeholder-zinc-400 outline-none"
                placeholder="Qual a atividade?"
                value={title}
                required
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              {trip && (
                <DatePicker
                  setDate={setDate}
                  date={date}
                  from={new Date(trip?.starts_at)}
                  to={new Date(trip?.ends_at)}
                />
              )}
              <TimePicker date={date || new Date()} setDate={setDate} />
            </div>
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
      </DialogContent>
    </Dialog>
  )
}
