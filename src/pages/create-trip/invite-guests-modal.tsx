import { AtSign, Plus, X } from 'lucide-react'
import { FormEvent } from 'react'

import { Button } from '@/components/ui/button'

interface InviteGuestsModalProps {
  closeModal: () => void
  emailsToInvite: Array<string>
  removeEmailFromInvites: (email: string) => void
  addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void
}

export function InviteGuestsModal({
  closeModal,
  addNewEmailToInvite,
  emailsToInvite,
  removeEmailFromInvites,
}: InviteGuestsModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="shadow-shape w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Selecionar convidados</h2>
          <button onClick={closeModal}>
            <X className="size-5 text-zinc-400" />
          </button>
        </div>
        <p className="mt-2 text-sm text-zinc-400">
          Os convidados irão receber e-mails para confirmar a participação na
          viagem.
        </p>
        <div className="flex flex-wrap gap-2">
          {emailsToInvite.map((email: string) => (
            <div
              key={email}
              className="flex items-center gap-2 rounded-md bg-zinc-800 px-2.5 py-1.5 text-zinc-300"
            >
              {email}
              <button onClick={() => removeEmailFromInvites(email)}>
                <X className="size-4 text-zinc-400" />
              </button>
            </div>
          ))}
        </div>

        <div className="h-px w-full bg-zinc-800" />

        <form
          onSubmit={addNewEmailToInvite}
          className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 p-2.5"
        >
          <AtSign className="ml-2 size-5 text-zinc-400" />
          <input
            className="text-large flex-1 bg-transparent placeholder-zinc-400 outline-none"
            type="email"
            name="email"
            placeholder="Digite o email do convidado"
          />
          <Button variant="primary">
            Convidar
            <Plus className="size-5" />
          </Button>
        </form>
      </div>
    </div>
  )
}
