import { createContext, FormEvent, useContext, useState } from 'react'
import { DateRange } from 'react-day-picker'
import { Outlet, useNavigate } from 'react-router-dom'

import { api } from '@/lib/axios'

interface TripContextData {
  emailsToInvite: Array<string>
  dates: DateRange | undefined
  destination: string
  ownerName: string
  ownerEmail: string
  setOwnerName: (data: string) => void
  setOwnerEmail: (data: string) => void
  setDestination: (destination: string) => void
  setDates: (date: DateRange | undefined) => void
  addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void
  removeEmailFromInvites: (emailToRemove: string) => void
  createTrip: (event: FormEvent<HTMLFormElement>) => void
}

const TripContext = createContext({} as TripContextData)

export function TripProvider() {
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([])
  const [dates, setDates] = useState<DateRange | undefined>()
  const [destination, setDestination] = useState('')
  const [ownerName, setOwnerName] = useState('')
  const [ownerEmail, setOwnerEmail] = useState('')

  const navigate = useNavigate()

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    if (!email) return

    if (emailsToInvite?.includes(email)) {
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

  async function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    console.log(emailsToInvite)
    console.log(dates)
    console.log(destination)
    console.log(ownerEmail)
    console.log(ownerName)

    if (
      !destination ||
      !dates?.from ||
      !dates.to ||
      emailsToInvite.length === 0 ||
      !ownerEmail ||
      !ownerName
    )
      return

    const response = await api.post('/trips', {
      destination,
      starts_at: dates?.from,
      ends_at: dates?.to,
      emails_to_invite: emailsToInvite,
      owner_name: ownerName,
      owner_email: ownerEmail,
    })
    const { tripId } = response.data

    navigate(`/trip/${tripId}`)
  }

  return (
    <TripContext.Provider
      value={{
        emailsToInvite,
        dates,
        setDates,
        setOwnerEmail,
        setOwnerName,
        ownerEmail,
        ownerName,
        destination,
        setDestination,
        addNewEmailToInvite,
        createTrip,
        removeEmailFromInvites,
      }}
    >
      <Outlet />
    </TripContext.Provider>
  )
}

export const useTrip = () => useContext(TripContext)
