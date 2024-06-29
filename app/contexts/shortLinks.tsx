'use client'
import { createContext, useState } from 'react'
import { retrieveFromSessionStorage } from '@utils/localStorage'

interface ShortLinksContextType {
  shortLinkIds: string[]
  setShortLinkIds: React.Dispatch<React.SetStateAction<string[]>>
}

export const ShortLinksContext = createContext<ShortLinksContextType | undefined>(undefined)

export default function ShortUrlProvider({ children }: { children: React.ReactNode }) {
  const initialShortLinkIds = retrieveFromSessionStorage()
  const [shortLinkIds, setShortLinkIds] = useState<string[]>(initialShortLinkIds)

  return (
    <ShortLinksContext.Provider value={{ shortLinkIds, setShortLinkIds }}>
      {children}
    </ShortLinksContext.Provider>
  )
}
