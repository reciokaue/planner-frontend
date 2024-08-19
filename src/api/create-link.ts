import { api } from '@/lib/axios'

interface CreateLink {
  title: string
  url: string
  tripId?: string
}

export async function createLink({ title, url, tripId }: CreateLink) {
  if (!tripId) return

  const response = await api.post(`/trips/${tripId}/links`, {
    title,
    url,
  })
  return response.data.linkId as string
}
