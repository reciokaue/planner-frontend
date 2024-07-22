import { Mail, User, X } from 'lucide-react'
import { FormEvent } from 'react'

interface ConfirmTripModalProps {
  closeModal: () => void
  createTrip: (event: FormEvent<HTMLFormElement>) => void
}

export function ConfirmTripModal({
  closeModal,
  createTrip,
}: ConfirmTripModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Confirmar criação da viagem</h2>
          <button onClick={closeModal}>
            <X className="size-5 text-zinc-400" />
          </button>
        </div>
        <p className="mt-2 text-sm text-zinc-400">
          Para concluir a criação da viagem para{' '}
          <b className="font-semibold text-zinc-400">Florianópolis, Brasil</b>{' '}
          nas datas de{' '}
          <b className="font-semibold text-zinc-400">
            16 a 27 de Agosto de 2024
          </b>{' '}
          preencha seus dados abaixo:
        </p>
        <form onSubmit={createTrip}>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 p-4">
              <User className="ml-2 size-5 text-zinc-400" />
              <input
                className="text-large flex-1 bg-transparent placeholder-zinc-400 outline-none"
                name="username"
                type="text"
                placeholder="Seu nome completo"
              />
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 p-4">
              <Mail className="ml-2 size-5 text-zinc-400" />
              <input
                className="text-large flex-1 bg-transparent placeholder-zinc-400 outline-none"
                type="email"
                name="email"
                placeholder="Seu e-mail pessoal"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-3 flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400"
          >
            Confirmar criação da viagem
          </button>
        </form>
      </div>
    </div>
  )
}
