'use client'
import { Link } from '@interfaces/short-link'
import { createContext, useState } from 'react'

type ShortLinksContextType = {
  shortLinks: Link[];
  setShortLinks: React.Dispatch<React.SetStateAction<Link[]>>;
};

export const ShortLinksContext = createContext<ShortLinksContextType | undefined>(undefined)

export default function ShortUrlProvider({ children }: { children: React.ReactNode }) {
  const [shortLinks, setShortLinks] = useState<Link[]>([])

  return (
    <ShortLinksContext.Provider value={{shortLinks, setShortLinks}}>
      {children}
    </ShortLinksContext.Provider>
  )
}
