import CatIcon from '@components/icons/cat'

export default function Header() {
  return (
    <header className='mb-8'>
      <div className='flex items-center justify-center'>
        <CatIcon className='h-12 w-12 mr-2 text-[#FF8C00]' />
        <h1 className='text-3xl font-bold text-[#FF8C00]'>Catly</h1>
      </div>
    </header>
  )
}
