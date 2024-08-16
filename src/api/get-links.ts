import { api } from '@/lib/axios'

interface Link {
  id: string
  title: string
  url: string
}

export async function getLinks(tripId: string) {
  if (!tripId) return

  const response = await api.get(`/trips/${tripId}/links`)
  return response.data.links as Link[]
}
