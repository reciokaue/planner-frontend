import {
  Calendar,
  CircleCheck,
  CircleDashed,
  Clock,
  Link2,
  MapPin,
  Plus,
  Settings2,
  Tag,
  UserCog,
  X,
} from 'lucide-react'
import { useState } from 'react'

export function TripDetailsPage() {
  const [activityModal, setActivityModal] = useState(false)

  const openActivivityModal = () => setActivityModal(true)
  const closeActivivityModal = () => setActivityModal(false)

  return (
    <div className="mx-auto flex max-w-6xl flex-col space-y-8 px-6 py-10">
      <div className="flex h-16 items-center justify-between rounded-xl bg-zinc-900 px-4 shadow-shape">
        <div className="flex items-center gap-2 text-lg text-zinc-100">
          <MapPin className="size-5 text-zinc-400" /> Florianópolis, Brasil
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2 text-lg text-zinc-100">
            <Calendar className="size-5 text-zinc-400" /> 17 a 23 de agosto
          </div>
          <div className="h-6 w-px bg-zinc-800" />

          <button className="flex items-center gap-2 rounded-lg bg-zinc-800 px-5 py-2 font-medium text-zinc-200 hover:bg-zinc-700">
            Alterar local/data
            <Settings2 className="size-5" />
          </button>
        </div>
      </div>

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <header className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <button
              onClick={openActivivityModal}
              className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400"
            >
              <Plus className="size-5" />
              Cadastrar atividade
            </button>
          </header>

          <div className="space-y-8">
            <div className="space-y-2.5">
              <div className="flex items-baseline">
                <span className="text-xl font-semibold text-zinc-300">
                  Dia 17
                </span>
                <span className="text-xs text-zinc-500">Sábado</span>
              </div>
              <p className="text-sm text-zinc-500">
                Nenhuma atividade cadastrada nessa data.
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-semibold text-zinc-300">
                  Dia 17
                </span>
                <span className="text-xs text-zinc-500">Sábado</span>
              </div>
              <div className="space-y-2.5">
                <div className="flex items-center gap-3 rounded-xl bg-zinc-900 px-4 py-2.5 shadow-shape">
                  <CircleCheck className="size-5 text-lime-300" />
                  <span className="text-zinc-100">Academia em grupo</span>
                  <span className="ml-auto text-sm text-zinc-400">
                    Academia em grupo
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-zinc-900 px-4 py-2.5 shadow-shape">
                  <CircleCheck className="size-5 text-lime-300" />
                  <span className="text-zinc-100">Academia em grupo</span>
                  <span className="ml-auto text-sm text-zinc-400">
                    Academia em grupo
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-80 space-y-6">
          <header className="space-y-6">
            <h2 className="text-xl font-semibold">Links importantes</h2>

            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div className="5 space-y-1">
                  <h3 className="font-medium text-zinc-100">
                    Reserva do AirBnB
                  </h3>
                  <a
                    href="#"
                    className="block truncate text-xs text-zinc-400 hover:text-zinc-200"
                  >
                    https://www.airbnb.com.br/rooms/1047000113129389012380129
                  </a>
                </div>
                <Link2 className="size-5 shrink-0 text-zinc-400" />
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="5 space-y-1">
                  <h3 className="font-medium text-zinc-100">
                    Reserva do AirBnB
                  </h3>
                  <a
                    href="#"
                    className="block truncate text-xs text-zinc-400 hover:text-zinc-200"
                  >
                    https://www.airbnb.com.br/rooms/1047000113129389012380129
                  </a>
                </div>
                <Link2 className="size-5 shrink-0 text-zinc-400" />
              </div>
            </div>

            <button className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-zinc-800 px-5 py-2 font-medium text-zinc-200 hover:bg-zinc-700">
              <Plus className="size-5" />
              Cadastrar novo link
            </button>
          </header>
          <div className="h-px w-full bg-zinc-800" />

          <aside className="space-y-6">
            <h2 className="text-xl font-semibold">Convidados</h2>

            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div className="5 space-y-1">
                  <h3 className="font-medium text-zinc-100">Jessica White</h3>
                  <span className="block truncate text-sm text-zinc-400">
                    jessica.white44@yahoo.com
                  </span>
                </div>
                <CircleDashed className="size-5 shrink-0 text-zinc-400" />
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="5 space-y-1">
                  <h3 className="font-medium text-zinc-100">
                    Dr. Rita Pacocha
                  </h3>
                  <span className="block truncate text-sm text-zinc-400">
                    lacy.stiedemann@gmail.com
                  </span>
                </div>
                <CircleDashed className="size-5 shrink-0 text-zinc-400" />
              </div>
            </div>

            <button className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-zinc-800 px-5 py-2 font-medium text-zinc-200 hover:bg-zinc-700">
              <UserCog className="size-5" />
              Gerenciar convidados
            </button>
          </aside>
        </div>
      </main>

      {activityModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60">
          <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
              <button onClick={closeActivivityModal}>
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
      )}
    </div>
  )
}
