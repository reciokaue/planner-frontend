import { api } from '@/lib/axios'

interface TripProps {
  id: string
  destination: string
  starts_at: string
  ends_at: string
  is_confirmed: boolean
}

export async function getTrip(tripId: string) {
  if (!tripId) return

  const response = await api.get(`/trips/${tripId}`)
  return response.data.trip as TripProps
}
