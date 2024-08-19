import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Captions, Link2, Plus } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { useParams } from 'react-router-dom'

import { createLink } from '@/api/create-link'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export function NewLinkButtonModal() {
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')

  const { tripId } = useParams()
  const queryClient = useQueryClient()

  const linkMutation = useMutation({
    mutationFn: createLink,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['links', tripId] })
    },
  })
  async function createNewLink(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log(title, url)

    if (!title || !url) return

    console.log(title, url)

    await linkMutation.mutateAsync({
      title,
      url,
      tripId,
    })

    setTitle('')
    setUrl('')
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">
          <Plus className="size-5" />
          Cadastrar novo link
        </Button>
      </DialogTrigger>
      <DialogContent>
        <form
          className="flex flex-1 flex-col space-y-5"
          onSubmit={createNewLink}
        >
          <DialogHeader>
            <DialogTitle>Cadastrar novo Link</DialogTitle>
          </DialogHeader>

          <section className="space-y-2">
            <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 p-4">
              <Captions className="ml-2 size-5 text-zinc-400" />
              <input
                className="text-large flex-1 bg-transparent placeholder-zinc-400 outline-none"
                placeholder="Titulo"
                value={title}
                required
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 p-4">
              <Link2 className="ml-2 size-5 text-zinc-400" />
              <input
                className="text-large flex-1 bg-transparent placeholder-zinc-400 outline-none"
                placeholder="Qual a atividade?"
                value={url}
                required
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
          </section>
          <Button type="submit" loading={linkMutation.isPending}>
            Adicionar
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
