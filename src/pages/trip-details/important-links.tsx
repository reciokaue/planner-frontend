import { useQuery } from '@tanstack/react-query'
import { Link2 } from 'lucide-react'
import { useParams } from 'react-router-dom'

import { getLinks } from '@/api/get-links'
import { Skeleton } from '@/components/ui/skeleton'

import { NewLinkButtonModal } from './new-link-button-modal'

export function ImportantLinks() {
  const { tripId } = useParams()

  const { data: links, isLoading } = useQuery({
    queryKey: ['links', tripId],
    queryFn: () => getLinks(tripId || ''),
  })

  return (
    <header className="space-y-6">
      <h2 className="text-xl font-semibold">Links importantes</h2>
      <div className="space-y-5">
        {!isLoading && links
          ? links.map((link) => (
              <div
                key={link.id}
                className="flex items-center justify-between gap-4"
              >
                <div className="5 space-y-1">
                  <h3 className="font-medium text-zinc-100">{link.title}</h3>
                  <a
                    href={link.url}
                    target="_blank"
                    className="block truncate text-xs text-zinc-400 hover:text-zinc-200"
                    rel="noreferrer"
                  >
                    {link.url}
                  </a>
                </div>
                <Link2 className="size-5 shrink-0 text-zinc-400" />
              </div>
            ))
          : [1, 2].map((i) => <Skeleton key={i} className="h-11 w-full" />)}
      </div>

      <NewLinkButtonModal />
    </header>
  )
}
