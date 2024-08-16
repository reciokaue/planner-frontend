import './index.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { TripProvider } from './contexts/trip'
import { CreateTripPage } from './pages/create-trip'
import { TripDetailsPage } from './pages/trip-details'

const router = createBrowserRouter([
  {
    element: <TripProvider />,
    children: [
      {
        path: '/',
        element: <CreateTripPage />,
      },
      {
        path: 'trip/:tripId',
        element: <TripDetailsPage />,
      },
    ],
  },
])

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
