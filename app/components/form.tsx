'use client'
import { useContext, useRef } from 'react'
import ScissorsIcon from '@components/icons/scissors'
import Label from '@components/label'
import Input from '@components/input'
import Button from '@components/button'
import { ShortLinksContext } from '@contexts/shortLinks'
import { toast } from 'sonner'
import { saveToSessionStorage } from '@utils/localStorage'
import { createShortLink } from '@services/shortener'

export default function Form() {
  const { shortLinkIds, setShortLinkIds } = useContext<any>(ShortLinksContext)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputRef.current?.value) {
      toast.error('Please enter a URL. 😿')
      return
    }

    createShortLink(inputRef.current.value).then(data => {
      if (!data) return
      
      setShortLinkIds(shortLinkIds.concat(data.id))
      saveToSessionStorage(shortLinkIds.concat(data.id))
      toast.success('URL shortened successfully. 😽🎉')
      inputRef.current!.value = ''
    })
  }

  return (
    <section className='bg-white shadow-lg rounded-lg p-8 w-full max-w-md'>
      <form className='space-y-4' onSubmit={handleSubmit}>
        <div>
          <Label htmlFor='url' className='block font-medium text-[#FF8C00]'>
            Enter a long URL
          </Label>
          <Input
            id='url'
            type='text'
            reference={inputRef}
            placeholder='https://example.com/very-long-url'
            className='w-full border-[#FFF0E6] focus:border-[#FF8C00] focus:ring-[#FF8C00]'
          />
        </div>
        <Button
          type='submit'
          className='bg-[#FF8C00] hover:bg-[#FF7100] text-white font-medium py-2 px-4 rounded-lg w-full'>
          Shorten URL <ScissorsIcon className='h-5 w-5 ml-2' />
        </Button>
      </form>
    </section>
  )
}
