'use client'
import { useContext, useEffect } from 'react'
import Button from './button'
import BarChartIcon from './icons/barchart'
import CopyIcon from './icons/copy'
import LinkIcon from './icons/link'
import type { Link } from '@interfaces/short-link'
import { ShortLinksContext } from '@contexts/shortLinks'
import { retrieveFromLocalStorage } from '@utils/localStorage'
import { copyToClipboard } from '@utils/clipboard'
import { toast } from 'sonner'

export default function History() {
  const { shortLinks, setShortLinks } = useContext(ShortLinksContext)

  useEffect(() => {
    const links = retrieveFromLocalStorage()
    setShortLinks(links)
  }, [])

  return (
    <div>
      {shortLinks?.length > 0 && (
        <div className='mt-8 w-full max-w-md'>
          <h2 className='text-2xl font-bold text-[#FF8C00] mb-4'>Your Catly Links</h2>
          <div className='bg-white shadow-lg rounded-lg p-4'>
            <ul className='space-y-4'>
              {shortLinks?.map(({ id, link, key, clicks }: Link) => (
                <li className='flex items-center justify-between' key={id}>
                  <div className='flex items-center'>
                    <LinkIcon className='h-6 w-6 mr-2 text-[#FF8C00]' />
                    <a href='#' className='text-[#FF8C00] hover:underline hover:text-[#FF7100]'>
                      {link.length > 30 ? `${link.slice(0, 30)}...` : link}
                    </a>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <Button
                      className='rounded-md font-medium hover:text-accent-foreground w-10 text-[#FF8C00] hover:bg-[#FFF0E6] hover:text-black'
                      onClick={() => copyToClipboard(`https://catly.com/${key}`)}>
                      <CopyIcon className='h-5 w-5' />
                      <span className='sr-only'>Copy link</span>
                    </Button>
                    <Button
                      className='rounded-md font-medium hover:text-accent-foreground w-10 text-[#FF8C00] hover:bg-[#FFF0E6] hover:text-black'
                      onClick={() =>
                        toast.info(`Your Catly link has been visited ${clicks} times! 📊📈`)
                      }>
                      <BarChartIcon className='h-5 w-5' />
                      <span className='sr-only'>View analytics</span>
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
