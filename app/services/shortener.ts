import { GlobalResponse } from '@interfaces/http-request'
import { toast } from 'sonner'

export const fetchShortenedLinks = async (ids: string[]) => {
  const res: Response = await fetch('/api/shortener', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(ids),
  })

  if (!res.ok) {
    console.error('Failed to retrieve shortened URLs')
    return
  }
  const { data }: GlobalResponse = await res.json()
  return data
}

export const fetchShortenedLink = async (key: string) => {
  const res: Response = await fetch(`/api/shortener/${key}`, { method: 'GET' })

  if (!res.ok) {
    console.error('Failed to retrieve shortened URL')
    toast.error('An error occurred. Please try again. 😿')
    return
  }

  const { data }: GlobalResponse = await res.json()
  return data
}

export const createShortLink = async (url: string) => {
  const res: Response = await fetch('/api/shortener', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url }),
  })

  if (!res.ok) {
    console.error('Failed to shorten URL')
    toast.error('An error occurred. Please try again. 😿')
    return
  }

  const { data }: GlobalResponse = await res.json()
  return data
}

export const getLinkViews = async (id: string) => {
  const res: Response = await fetch(`/api/views/${id}`, { method: 'GET' })

  if (!res.ok) {
    console.error('Failed to retrieve shortened URL')
    toast.error('An error occurred. Please try again. 😿')
    return
  }

  const { data }: GlobalResponse = await res.json()
  toast.info(`Your Catly link has been visited ${data.clicks} times! 📊📈`)
}
