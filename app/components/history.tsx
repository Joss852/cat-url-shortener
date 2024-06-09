import Button from './button'
import BarChartIcon from './icons/barchart'
import CopyIcon from './icons/copy'
import LinkIcon from './icons/link'

export default function History() {
  const links = ['baco.com/cat-video', 'baco.com/dog-video']

  return (
    <div className='mt-8 w-full max-w-md'>
      <h2 className='text-2xl font-bold text-[#FF8C00] mb-4'>Your Catly Links</h2>
      <div className='bg-white shadow-lg rounded-lg p-4'>
        <ul className='space-y-4'>
          {links.map(link => (
            <li className='flex items-center justify-between' key={link}>
              <div className='flex items-center'>
                <LinkIcon className='h-6 w-6 mr-2 text-[#FF8C00]' />
                <a href='#' className='text-[#FF8C00] hover:underline hover:text-[#FF7100]'>
                  {link}
                </a>
              </div>
              <div className='flex items-center space-x-2'>
                <Button className='rounded-md font-medium hover:text-accent-foreground w-10 text-[#FF8C00] hover:bg-[#FFF0E6] hover:text-black'>
                  <CopyIcon className='h-5 w-5' />
                  <span className='sr-only'>Copy link</span>
                </Button>
                <Button className='rounded-md font-medium hover:text-accent-foreground w-10 text-[#FF8C00] hover:bg-[#FFF0E6] hover:text-black'>
                  <BarChartIcon className='h-5 w-5' />
                  <span className='sr-only'>View analytics</span>
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
