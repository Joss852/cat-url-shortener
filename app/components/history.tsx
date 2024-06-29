'use client'
import { useContext, useEffect, useState } from 'react'
import type { Link } from '@interfaces/short-link'
import { ShortLinksContext } from '@contexts/shortLinks'
import { fetchShortenedLinks } from '@services/shortener'
import ShortenedLinks from './shortened-links'

export default function History() {
  const { shortLinkIds } = useContext<any>(ShortLinksContext)
  const [links, setLinks] = useState<Link[]>([])

  useEffect(() => {
    if (shortLinkIds.length === 0) return
    fetchShortenedLinks(shortLinkIds).then((data: any) => {
      return setLinks(data)
    })
  }, [shortLinkIds])

  return (
    <section className='mt-8 w-full max-w-md'>
      {links?.length > 0 && shortLinkIds?.length > 0 ? (
        <div>
          <h2 className='text-2xl font-bold text-[#FF8C00] mb-4 text-center'>Your Catly links</h2>
          <ShortenedLinks links={links} />
        </div>
      ) : null}
    </section>
  )
}
