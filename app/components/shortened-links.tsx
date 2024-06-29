import { Link } from '@interfaces/short-link'
import Button from './button'
import BarChartIcon from './icons/barchart'
import CopyIcon from './icons/copy'
import LinkIcon from './icons/link'
import { copyToClipboard } from '@utils/clipboard'
import { getLinkViews } from '@services/shortener'

export default function ShortenedLinks({ links }: { links: Link[] }): JSX.Element {
  return (
    <div className='bg-white shadow-lg rounded-lg p-4'>
      <ul className='space-y-4'>
        {links?.map(({ id, link, key }: Link) => (
          <li className='flex items-center justify-between' key={id}>
            <div className='flex items-center'>
              <LinkIcon className='h-6 w-6 mr-2 text-[#FF8C00]' />
              <span className='text-[#FF8C00] hover:underline hover:text-[#FF7100]'>
                {link.length > 30 ? `${link.slice(0, 36)}...` : link}
              </span>
            </div>
            <div className='flex items-center space-x-2'>
              <Button
                className='rounded-md font-medium hover:text-accent-foreground w-10 text-[#FF8C00] hover:bg-[#FFF0E6] hover:text-black'
                onClick={() => copyToClipboard(`${window.location.hostname}/${key}`)}>
                <CopyIcon className='h-5 w-5' />
                <span className='sr-only'>Copy link</span>
              </Button>
              <Button
                className='rounded-md font-medium hover:text-accent-foreground w-10 text-[#FF8C00] hover:bg-[#FFF0E6] hover:text-black'
                onClick={() => getLinkViews(id)}>
                <BarChartIcon className='h-5 w-5' />
                <span className='sr-only'>View analytics</span>
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
