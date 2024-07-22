import {
  ArrowRight,
  AtSign,
  Calendar,
  Mail,
  MapPin,
  Plus,
  Settings2,
  User,
  UserRoundPlus,
  X,
} from 'lucide-react'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function CreateTripPage() {
  const navigate = useNavigate()

  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)
  const [emailsToInvite, setEmailsToInvite] = useState([
    'kaue.recio2@gmail.com',
  ])

  function openGuestsInput() {
    setIsGuestInputOpen(true)
  }

  function closeGuestsInput() {
    setIsGuestInputOpen(false)
  }

  function openModal() {
    setIsModalOpen(true)
  }
  function closeModal() {
    setIsModalOpen(false)
  }
  function openConfirmTripModal() {
    setIsConfirmTripModalOpen(true)
  }
  function closeConfirmTripModal() {
    setIsConfirmTripModalOpen(false)
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    if (!email) return

    if (emailsToInvite.includes(email)) {
      event.currentTarget.reset()
      return
    }

    setEmailsToInvite([...emailsToInvite, email])
    event.currentTarget.reset()
  }

  function removeEmailFromInvites(emailToRemove: string) {
    const newEmailList = emailsToInvite.filter(
      (email) => email !== emailToRemove,
    )
    setEmailsToInvite(newEmailList)
  }

  function createTrip() {
    navigate('/trip/123')
  }

  return (
    <div className="flex h-screen items-center justify-center bg-pattern bg-center bg-no-repeat">
      <div className="flex w-full max-w-3xl flex-col items-center px-6 text-center">
        <img src="/logo.svg" alt="plann.er" />
        <p className="mt-3 text-lg text-zinc-300">
          Convide seus amigos e planeje sua próxima viagem!
        </p>

        <div className="my-10 space-y-4">
          <div className="flex h-16 items-center gap-3 rounded-s-xl bg-zinc-900 px-4 shadow-shape">
            <div className="flex flex-1 items-center gap-2">
              <MapPin className="size-5 text-zinc-400" />
              <input
                disabled={isGuestInputOpen}
                className="text-large flex-1 bg-transparent placeholder-zinc-400 outline-none"
                type="text"
                placeholder="Para onde você vai?"
              />
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400" />
              <input
                disabled={isGuestInputOpen}
                className="text-large w-36 bg-transparent placeholder-zinc-400 outline-none"
                type="text"
                placeholder="Quando?"
              />
            </div>

            <div className="h-6 w-px bg-zinc-800" />

            {isGuestInputOpen ? (
              <button
                onClick={closeGuestsInput}
                className="flex items-center gap-2 rounded-lg bg-zinc-800 px-5 py-2 font-medium text-zinc-200 hover:bg-zinc-700"
              >
                Alterar local/data
                <Settings2 className="size-5" />
              </button>
            ) : (
              <button
                onClick={openGuestsInput}
                className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400"
              >
                Continuar
                <ArrowRight className="size-5" />
              </button>
            )}
          </div>

          {isGuestInputOpen && (
            <div className="flex h-16 items-center gap-3 rounded-s-xl bg-zinc-900 px-4 shadow-shape">
              <button
                onClick={openModal}
                type="button"
                className="flex flex-1 items-center gap-2"
              >
                <UserRoundPlus className="size-5 text-zinc-400" />
                {emailsToInvite.length > 0 ? (
                  <span className="flex-1 text-left text-lg text-zinc-100">
                    {emailsToInvite.length} pessoa(s) convidada(s)
                  </span>
                ) : (
                  <span className="flex-1 text-left text-lg text-zinc-400">
                    Quem estará na viagem?
                  </span>
                )}
              </button>

              <div className="h-6 w-px bg-zinc-800" />

              <button
                onClick={openConfirmTripModal}
                className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400"
              >
                Confirmar viagem
                <ArrowRight className="size-5" />
              </button>
            </div>
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

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60">
          <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Selecionar convidados</h2>
              <button onClick={closeModal}>
                <X className="size-5 text-zinc-400" />
              </button>
            </div>
            <p className="mt-2 text-sm text-zinc-400">
              Os convidados irão receber e-mails para confirmar a participação
              na viagem.
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
              <button
                type="submit"
                className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400"
              >
                Convidar
                <Plus className="size-5" />
              </button>
            </form>
          </div>
        </div>
      )}
      {isConfirmTripModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60">
          <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">
                Confirmar criação da viagem
              </h2>
              <button onClick={closeConfirmTripModal}>
                <X className="size-5 text-zinc-400" />
              </button>
            </div>
            <p className="mt-2 text-sm text-zinc-400">
              Para concluir a criação da viagem para{' '}
              <b className="font-semibold text-zinc-400">
                Florianópolis, Brasil
              </b>{' '}
              nas datas de{' '}
              <b className="font-semibold text-zinc-400">
                16 a 27 de Agosto de 2024
              </b>{' '}
              preencha seus dados abaixo:
            </p>
            <form onSubmit={addNewEmailToInvite}>
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
                onClick={createTrip}
                type="submit"
                className="mt-3 flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400"
              >
                Confirmar criação da viagem
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
