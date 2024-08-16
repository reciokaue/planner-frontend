import { api } from '@/lib/axios'

interface Activity {
  id: string
  title: string
  occurs_at: string
}
interface ActivitiesDay {
  date: string
  activities: Activity[]
}

export async function getActivities(tripId: string) {
  if (!tripId) return

  const response = await api.get(`/trips/${tripId}/activities`)
  return response.data.activities as ActivitiesDay[]
}
