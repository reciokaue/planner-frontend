import { api } from '@/lib/axios'

interface AddActivity {
  tripId: string
  title: string
  occurs_at: string | Date
}

export async function addActivity({ title, occurs_at, tripId }: AddActivity) {
  if (!tripId) return

  const response = await api.post(`/trips/${tripId}/activities`, {
    title,
    occurs_at,
  })
  return response.data.activityId as string
}
