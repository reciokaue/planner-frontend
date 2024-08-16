import { useState } from 'react'

import { useTrip } from '@/contexts/trip'

import { ConfirmTripModal } from './confirm-trip-modal'
import { InviteGuestsModal } from './invite-guests-modal'
import { DestinationAndDate } from './steps/destination-and-date'
import { InviteGuestsStep } from './steps/invite-guests-step'

export function CreateTripPage() {
  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)

  const {
    addNewEmailToInvite,
    createTrip,
    removeEmailFromInvites,
    emailsToInvite,
  } = useTrip()

  function openGuestsInput() {
    setIsGuestInputOpen(true)
  }
  function closeGuestsInput() {
    setIsGuestInputOpen(false)
  }
  function openGuestsModal() {
    setIsGuestsModalOpen(true)
  }
  function closeGuestsModal() {
    setIsGuestsModalOpen(false)
  }
  function openConfirmTripModal() {
    setIsConfirmTripModalOpen(true)
  }
  function closeConfirmTripModal() {
    setIsConfirmTripModalOpen(false)
  }

  return (
    <div className="bg-pattern flex h-screen items-center justify-center bg-center bg-no-repeat">
      <div className="flex w-full max-w-3xl flex-col items-center px-6 text-center">
        <img src="/logo.svg" alt="plann.er" />
        <p className="mt-3 text-lg text-zinc-300">
          Convide seus amigos e planeje sua próxima viagem!
        </p>

        <div className="my-10 space-y-4">
          <DestinationAndDate
            closeGuestsInput={closeGuestsInput}
            isGuestInputOpen={isGuestsModalOpen}
            openGuestsInput={openGuestsInput}
          />

          {isGuestInputOpen && (
            <InviteGuestsStep
              emailsToInvite={emailsToInvite}
              openConfirmTripModal={openConfirmTripModal}
              openGuestsModal={openGuestsModal}
            />
          )}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{' '}
          <br />
          com nossos{' '}
          <a href="#" className="text-zinc-300 underline">
            termos de uso
          </a>{' '}
          e{' '}
          <a href="#" className="text-zinc-300 underline">
            políticas de privacidade.
          </a>
        </p>
      </div>

      {isGuestsModalOpen && (
        <InviteGuestsModal
          addNewEmailToInvite={addNewEmailToInvite}
          closeModal={closeGuestsModal}
          emailsToInvite={emailsToInvite}
          removeEmailFromInvites={removeEmailFromInvites}
        />
      )}
      {isConfirmTripModalOpen && (
        <ConfirmTripModal
          closeModal={closeConfirmTripModal}
          createTrip={createTrip}
        />
      )}
    </div>
  )
}
