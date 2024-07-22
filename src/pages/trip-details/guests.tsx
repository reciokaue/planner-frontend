import { CircleDashed, UserCog } from 'lucide-react'

// interface GuestsProps {}

export function Guests() {
  return (
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
            <h3 className="font-medium text-zinc-100">Dr. Rita Pacocha</h3>
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
  )
}
