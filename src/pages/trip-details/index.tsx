import { Calendar, MapPin, Plus, Settings2 } from 'lucide-react'
import { useState } from 'react'

import { Activities } from './activities'
import { CreateActivityModal } from './create-activity-modal'
import { Guests } from './guests'
import { Header } from './header'
import { ImportantLinks } from './important-links'

export function TripDetailsPage() {
  const [activityModal, setActivityModal] = useState(false)

  const openActivityModal = () => setActivityModal(true)
  const closeActivityModal = () => setActivityModal(false)

  return (
    <div className="mx-auto flex max-w-6xl flex-col space-y-8 px-6 py-10">
      <Header />

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <header className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <button
              onClick={openActivityModal}
              className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400"
            >
              <Plus className="size-5" />
              Cadastrar atividade
            </button>
          </header>

          <Activities />
        </div>

        <div className="w-80 space-y-6">
          <ImportantLinks />
          <div className="h-px w-full bg-zinc-800" />
          <Guests />
        </div>
      </main>

      {activityModal && (
        <CreateActivityModal closeActivityModal={closeActivityModal} />
      )}
    </div>
  )
}
