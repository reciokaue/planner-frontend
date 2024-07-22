import { Calendar, Tag, X } from 'lucide-react'

interface CreateActivityModalProps {
  closeActivityModal: () => void
}

export function CreateActivityModal({
  closeActivityModal,
}: CreateActivityModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
          <button onClick={closeActivityModal}>
            <X className="size-5 text-zinc-400" />
          </button>
        </div>
        <p className="text-sm text-zinc-400">
          Todos convidados podem visualizar as atividades.
        </p>
        <form>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 p-4">
              <Tag className="ml-2 size-5 text-zinc-400" />
              <input
                className="text-large flex-1 bg-transparent placeholder-zinc-400 outline-none"
                placeholder="Qual a atividade?"
              />
            </div>
            <div className="flex flex-1 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 p-4">
              <Calendar className="ml-2 size-5 text-zinc-400" />
              <input
                className="text-large flex-1 bg-transparent placeholder-zinc-400 outline-none"
                placeholder="Data e hora"
                type="datetime-local"
                name="occurs_at"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-3 flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400"
          >
            Salvar atividade
          </button>
        </form>
      </div>
    </div>
  )
}
