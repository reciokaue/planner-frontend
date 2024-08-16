import { api } from '@/lib/axios'

interface Participant {
  id: string
  name: string
  email: string
  is_confirmed: boolean
}

export async function getTripParticipants(tripId: string) {
  if (!tripId) return

  const response = await api.get(`/trips/${tripId}/participants`)
  return response.data.participants as Participant[]
}
